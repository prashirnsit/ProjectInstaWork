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
var data = [1,2,3,4,5,6,7,8,9]
var {height, width} = Dimensions.get('window');


export default class NaVbar extends Component{

	render(){
		return(<View style={styles.navBar}>
					<View style={{flex:0.8, alignItems:'center', justifyContent:'center'}}>
						<Text> List Screen</Text>
					</View>
					
				</View>)
	}

}
const styles = StyleSheet.create({

  navBar:{
  	flex:0.1,
  	// alignItems:'center',
  	// justifyContent:'center',
  	flexDirection:'row'
  },

})