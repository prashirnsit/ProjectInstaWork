
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  Image
} from 'react-native';

import Actions from '../utils/actions';
import Store from '../utils/store'

var {height, width} = Dimensions.get('window');
export default class ListPage extends Component{
	constructor(){
		super();
		this.state = {
			data :[],
			membername : {},
			page:'page'
		}
		// this.state.data
		console.disableYellowBox = true
	}
	
	componentDidMount(){
	}
	// componentWillReceiveProps(nextProps){
	// 	console.log(nextProps)
	// 	this.state.data = nextProps.data
	// }
	_onPressButton(){
		Actions.changeUrl({type:'newContact',item:{}, index:0})
	}

	editPage(a, item, index){
		var obj = {type:a, item:item, index:index}
		Actions.changeUrl(obj)
	}

	render(){
		data = Store.getdata()
		if(!Array.isArray(this.props.data))
			return null
		var that = this
		return(
			<View style={styles.mainContainer}>
				
				<View stye={{flex:0.9, backgroundColor:'green', width:100,height:1}}>
					
				</View>
				<View style={{padding:5, flex:0.8}}>
				<View style={styles.listpage}>
					<View style={styles.topContainer}>
						<View style={{flex:0.2, alignItems:'flex-end', justifyContent:'center', marginRight:20}}>
						<TouchableHighlight underlayColor='transparent' onPress={()=>this._onPressButton()}>
							<Text style={{fontSize:30}}>+</Text>
					    </TouchableHighlight>
						</View>
						<View style={{flex:0.8,}}>
							<View style={{flex:0.6, marginLeft:10,backgroundColor:'white',justifyContent:'center'}}>
								<Text style={{fontSize:30, fontColor:'black'}}>Team Members</Text>
								<Text style={{marginTop:5}}>You have {data.length} team memebers</Text>
							</View>
							<View style={{flex:0.2}}>
								<View stye={styles.horizontalLine, {flex:0.3}}></View>
							</View>
						</View>
					</View>
					<View style={{flex:0.7}}>

						<ScrollView style={{flex:1}}>
	         				 {
	         				 	data.map(function(item, index){
	         				 		if(item['admin'] == 'yes'){
	         				 			var adminText = '(admin)'
	         				 		}
	         				 		else{
	         				 			var adminText = ''

	         				 		}
	         				 		return(
	         				 				<View>
	         				 				
	         				 				<View style={styles.contactCard}>
	         				 					<View style={{flex:0.33, alignItems:'center', justifyContent:'center'}}>
	         				 					<Image
										          style={{width: 50, height: 50, marginLeft:0}}
										         source={require('../../images/man.png')}
										        />
	         				 					</View>
	         				 					<TouchableHighlight underlayColor="transparent" style={{flex:0.66}} onPress={()=>that.editPage('edit', item, index)}>
		         				 					<View style={{flex:1,}}>
		         				 						<View style={{flex:1, flexDirection:'column'}}>
		         				 							<View style={{flex:0.3 }}>
		         				 								<Text style={{fontColor:'#000000'}}> {item['name'] } {item['lastName']}{adminText}</Text>
		         				 							</View>
		         				 							<View style={{flex:0.3, }}>
		         				 								<Text>{item['location']}</Text>
		         				 							</View>
		         				 							<View style={{flex:0.3, }}>
		         				 								<Text> {item['email']}</Text>
		         				 							</View>

		         				 						</View>
		         				 					</View>
	         				 					</TouchableHighlight>

	         				 				</View>
	         				 				<View style={styles.horizontalLine}></View>
	         				 				</View>

	         				 			)
	         				 	})
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
  	width:width,
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
  	marginTop:5
  }
})

