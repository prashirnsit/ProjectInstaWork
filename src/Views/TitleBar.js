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


export default class TitleBar extends Component{

	render(){
		return(<View style={{flex:0.8,}}>
              <View style={{flex:0.6, marginLeft:10,backgroundColor:'white',justifyContent:'center'}}>
                <Text style={{fontSize:25, fontColor:'black'}}>{this.props.teamMember}</Text>
                <Text style={{marginTop:5}}>{this.props.subTitle}</Text>
              </View>
              <View style={{flex:0.2}}>
                <View stye={styles.horizontalLine, {flex:0.3}}></View>
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