
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';

import Edit from './AddTeamMember';
import ListPage from './ListPage.js';
import Events from '../utils/events';
import Store from '../utils/store';

var data = '';
var {height, width} = Dimensions.get('window');
export default class MainPage extends Component{
	constructor(){
		super();
		this.state = {
			membername : {},
			page:'page',
			editPage:{},
			index:0,
      data:''
		}
		console.disableYellowBox = true
	}
 async _updateList () { 
      let response = await AsyncStorage.getItem('data');
      data = await JSON.parse(response) || [];
      if(data.length == 0)
        data = Store.getdata()
      Store.storeDat(data)
      this.setState({data:data})
      
  } 
	async componentWillMount(){
    var that = this

   

  that._updateList()

    Store.addListener('edit', (object, index)=>that.editPage('edit', object, index))
    Store.addListener('close', (object, index)=>that.editPage('page'))
    Store.addListener('newContact', (object, index)=>that.editPage('newContact'))
    Store.addListener('saved', (object, index)=>that.editPage('page'))
	}

	_onPressButton(){
	}
	editPage(type, object, index){
		this.state.index = index
		this.state.editData = object
		this.setState({page: type})
	}
	render(){
		var Page ;
		var that = this
		if(this.state.page == 'page')
			Page = <ListPage data={this.state.data}/>

		else if(this.state.page == 'edit')
			Page = <Edit data={that.state.editData} index={that.state.index}/>

		else if(this.state.page == 'newContact'){
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

