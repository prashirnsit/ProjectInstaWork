import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  Text,
  TouchableHighlight
} from 'react-native';

var {height, width} = Dimensions.get('window');


export default class InputFields extends Component{
	constructor(props){
		super(props);
		this.state = {
			placeholder:props.placeholder,
			onChange: props.onChange,
			value: props.value,
			refer: props.refer
		}
	}
	componentWillReceiveProps(nextprops){
			this.state.value = nextprops.value
	}
	render(){
		return (

	         		<View style={styles.border}>
	         			<TextInput
	         				ref={this.state.refer}
	         				underlineColorAndroid="transparent"
							editable = {true}
							placeholder={this.state.placeholder}
							onChange={(event) => this.state.onChange(event.nativeEvent.text)}
							value={this.state.value}
						/>
	         		</View>
			)
	}
}

class InputFieldRadio extends Component{
	constructor(props){
		super(props);
		this.state = {
			textValue :props.textValue,
			onPressFunction: props.onPressFunction,
			admin:props.admin
			
		}
	}
	componentWillReceiveProps(nextprops){
			this.state.textValue = nextprops.textValue
			this.state.admin = nextprops.admin
	}
	render(){
		var that = this
		return (

	         		<View style={{marginTop:15, flexDirection:'row', flex:1}} >
	         				 			<View style={{flex:0.7}}>
	         				 				<Text>{this.state.textValue}</Text>
	         				 			</View>
	         				 			<View style={{flex:0.3, }}>
	         				 				<TouchableHighlight style={styles.radio} underlayColor='transparent' onPress={()=>this.state.onPressFunction()}>
												<View style={that.state.admin? styles.innerRadio:{borderColor:'green'}}>

												</View>
					    					</TouchableHighlight>
	         				 			</View>
	         				 		</View>
			)
	}
}
module.exports.InputFieldRadio = InputFieldRadio
const styles = StyleSheet.create({
 border:{
  	flex:0.5,
  	width:width-(width/5),
  	height:40,
  	borderWidth:2,
  	borderColor:'black',
  	marginTop:15
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
})