
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableHighlight
} from 'react-native';

import Edit from './AddTeamMember';
import ListPage from './ListPage.js';
import Events from './events'

var data = [1,2,3,4,5,6,7,8,9]
var {height, width} = Dimensions.get('window');
export default class MainPage extends Component{
	constructor(){
		super();
		this.state = {
			membername : {},
			page:'page',
			editPage:{},
			index:0
		}
		console.disableYellowBox = true
	}

	componentDidMount(){
		var that = this
		Events.on('edit', (object, index)=>that.editPage('edit', object, index))
		Events.on('close', ()=>that.editPage('page'))
		Events.on('newContact', ()=>that.editPage('newContact'))
		Events.on('saved', ()=>that.editPage('page'))


	}

	_onPressButton(){
		alert(90)
	}
	editPage(a, object, index){
		this.state.index = index
		this.state.editData = object
		this.setState({page: a})
	}
	render(){
		var Page ;
		var that = this
		if(this.state.page == 'page')
			Page = <ListPage />

		else if(this.state.page == 'edit')
			Page = <Edit data={that.state.editData} index={that.state.index}/>

		else if(this.state.page == 'newContact'){
			alert(90)
			Page = <Edit />
		}
		return(
			<View style={styles.mainContainer}>
				{Page}
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
  	padding:10
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

