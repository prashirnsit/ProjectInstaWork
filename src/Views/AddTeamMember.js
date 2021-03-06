
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  TextInput
} from 'react-native';
import Navbar from './Navbar';
import TitleBar from './TitleBar';
import Store from '../utils/store'
import Actions from '../utils/actions';
import InputField, {InputFieldRadio} from './inputFields'

var {height, width} = Dimensions.get('window');
export default class AddTeamMember extends Component{
	constructor(props){
		super(props)
		this.state = {
			data : {},
			name:'',
			LastName: '',
			Location: '',
			Email: '',
			memberDeletion: true,
			memberCannotDelete: false,
			value:'',
			admin:false,
			changed:false
		}
		if(this.props.data){
			if(this.props.data.admin == 'yes')
			this.state.admin = true
}
		else
			this.state.admin = false
		console.disableYellowBox = true
	}
	_onPressButton(){
		Actions.changeUrl({type:'close',item:{}, index:0})

	}

	componentWillMount(){
		if(this.props.data){
		this.state.name = this.props.data.name
		this.state.email = this.props.data.email
		this.state.location = this.props.data.location
		this.state.lastName = this.props.data.lastName
		}
	}
	updateName(data){
		this.setState({name: data})
	}

	updateEmail(data){
		this.setState({email: data})
	}

	updateLastName(data){
		this.setState({lastName: data})
	}

	updateLastLocation(data){
		this.setState({location: data})

	}
validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
	save(type){
		if((!this.state.data['name'] || !this.state.data['email']  || !this.state.data['location']) && type =='save'){
			alert('enter the fields')
			return
		}
		var object={}
		if(!this.validateEmail(this.state.data['email'])){
			alert('not a valid emmail')
			return
		}

		if(type == 'save'){
			object['name'] = this.state.data['name']
			object['email'] = this.state.data['email']
			object['lastName'] = this.state.data['lastName']
			object['location'] =  this.state.data['location']
			if(this.state.admin)
				object['admin'] = 'yes'
			else
				object['admin'] = 'no'

			if(this.props.data){
				Store.setData(object, this.props.index, 'replace')}
			else{
				Store.setData(object)
			}
		
	}
	else{
		object={}
		if(this.state.admin){
			Store.setData(object, this.props.index)
		}
		else{

			alert('no rights to delete')
			return
		}
	}

	}
	_oncandelete(){
		this.setState({admin: true})

	}

	_oncannotdelete(){
		this.setState({admin: false})
	}

	render(){
		var that = this
		if(this.props.data){
			var teamMember = "Edit a Team Member"
			var subTitle = "Edit email, location and role"
			// this.state.data = this.props.data

		}
		else{
			var teamMember = "Add a Team Member"
			var subTitle = "set email, location and role"
		}
		this.state.data['name'] = this.state.name
		this.state.data['lastName'] = this.state.lastName
		this.state.data['email'] = this.state.email
		this.state.data['location'] = this.state.location
		return(
			<View style={styles.mainContainer}>
				
				<View style={{padding:5, flex:0.8}}>
				<View style={styles.listpage}>
					<View style={styles.topContainer}>
						<View style={{flex:0.2, alignItems:'flex-end', justifyContent:'center', marginRight:20}}>
						<TouchableHighlight underlayColor='transparent' onPress={this._onPressButton}>
							<Text style={{fontSize:30}}>X</Text>
					    </TouchableHighlight>
						</View>
						<TitleBar teamMember={teamMember} subTitle={subTitle}/>
					</View>
					<View style={{flex:0.7}}>
						<ScrollView style={{flex:1, }}>
	         				 {
	         				 	<View style={{flex:1, flexDirection:'column'}}>
	         				 		
	         				 		<View style={{flex:0.3}}>
	         				 			<View>
	         				 			<Text> Info</Text>
	         				 				
	         				 			</View>
	         				 			<InputField placeholder="Name" onChange={(event)=>that.updateName(event)} value={that.state.name} refer="name"/>
	         				 			<InputField placeholder="Last Name" onChange={(event)=>that.updateLastName(event)} value={that.state.lastName} refer="lastname"/>
	         				 			<InputField placeholder="Location" onChange={(event)=>that.updateLastLocation(event)} value={that.state.location} refer="location"/>
	         				 			<InputField placeholder="email" onChange={(event)=>that.updateEmail(event)} value={that.state.email} refer="email"/>
	         				 		</View>
	         				 		<View style={{marginTop:20}}>
	         				 			<Text style={{fontSize:20}}>Role</Text>
	         				 		</View>

	         				 		<InputFieldRadio textValue="Regular - cannot delete members" onPressFunction={()=>this._oncannotdelete()} admin={!this.state.admin} />

	         				 		<View style={styles.horizontalLine}></View>

	         				 		<InputFieldRadio textValue="Admin - can delete members" onPressFunction={()=>this._oncandelete()} admin={this.state.admin} />

	         				 		<View style={styles.horizontalLine}></View>

	         				 		<View style={{marginTop:20, flexDirection:'row', flex:1}} >
	         				 			<View style={{flex:0.5, alignItems:'center',justifyContent:'center'}}>
	         				 				<TouchableHighlight style={that.props.data?styles.delete:{borderColor:0}} underlayColor='transparent' onPress={()=>that.save('delete')}>
												{
												that.props.data?<Text style={{fontColor:'red'}}>Delete</Text>:<Text></Text>
												}
					    					</TouchableHighlight>
	         				 			</View>

	         				 			<View style={{flex:0.5,  alignItems:'center',justifyContent:'center', }}>
	         				 				<TouchableHighlight style={styles.save} underlayColor='transparent' onPress={()=>that.save('save')}>
												<Text>Save</Text>
					    					</TouchableHighlight>
	         				 			</View>
	         				 		</View>
	         				 	</View>
	         				 }
	        			</ScrollView>
        			</View>
				</View>
				</View>
			</View>
			)
	}
}

const styles = StyleSheet.create({
  row: {
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC'
  },
  text: {
    flex: 1,
    fontSize: 20
  },
  mainContainer:{
  	flex:1,
  	flexDirection:'column',
  	backgroundColor:'#efeded',
  	padding:1
  },
  navBar:{
  	flex:0.1,
  	// alignItems:'center',
  	// justifyContent:'center',
  	flexDirection:'row'
  },
  listpage:{
  	flex:0.9,
  	padding:15,
  	backgroundColor:'white',
  	flexDirection:'column'
  },
  contactCard:{
  	flex:1,
  	marginTop:10,
  	height:100,
  	backgroundColor:'red',
  	flexDirection:'row'
  },
  topContainer:{
  	flex:0.3,
  	flexDirection:'column'
  },
  horizontalLine:{
  	width:width,
  	height:1,
  	backgroundColor:'black',
  	marginTop:15,
  	flex:0.1
  },
  radio:{
  	flex:1,
  	height:15,
  	width:25,
  	borderRadius:25,
  	borderColor:'black',
  	borderWidth:1,
  	marginLeft:30,
  	padding:5,
  	alignItems:'center',
  	justifyContent:'center'
  },
  innerRadio:{
  	height:10,
  	width:10,
  	borderRadius:10,
  	backgroundColor:'green'
  },
  border:{
  	flex:0.5,
  	width:width-(width/5),
  	height:40,
  	borderWidth:2,
  	borderColor:'black',
  	marginTop:15
  },
  save:{
  	borderColor:'black',
  	borderWidth:1,
  	flex:1,
  	width:60,
  	height:30,
  	alignItems:'center',
  	justifyContent:'center',
  	backgroundColor:'green'
  },
  delete:{
  	borderColor:'black',
  	borderWidth:1,
  	flex:1,
  	width:60,
  	height:30,
  	alignItems:'center',
  	justifyContent:'center',
  }
})

