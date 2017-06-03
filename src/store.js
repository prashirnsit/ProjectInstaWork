var Events = require('./events')

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
var dataDummy = [

    {
      'name':'uuu',
      'lastName':'',
      'location': 'Jan 10 2017',
      'email':'pdowjpihpdwhgd',
      'admin':'yes'
    },
    {
      'name':'alexander',
      'lastName':'',
      'location': 'Jan 10 2017',
      'email':'pdowjpihpdwhgd',
      'admin':'no'
    },
    
    {
      'name':'alexander',
      'lastName':'',
      'location': 'Jan 10 2017',
      'email':'pdowjpihpdwhgd',
      'admin':'yes'
    },
    {
      'name':'alexander',
      'lastName':'',
      'location': 'Jan 10 2017',
      'email':'pdowjpihpdwhgd',
      'admin':'yes'
    },
    {
      'name':'alexander',
      'lastName':'',
      'location': 'Jan 10 2017',
      'email':'pdowjpihpdwhgd',
      'admin':'yes'
    },
   {
      'name':'alexander',
      'lastName':'',
      'location': 'Jan 10 2017',
      'email':'pdowjpihpdwhgd',
      'admin':'yes'
    },
    
]

class Store {
	test(){
   
	}


getdata(){
  
  return dataDummy
}

setData(object, index, replace="newone"){
  if(Object.keys(object).length){
    if(replace == 'replace'){
      dataDummy[index] = object
    }
    else
      dataDummy.push(object)
  }
  else
    dataDummy.splice(index, 1); 

}

	addListener(event, callBack){
		Events.on(event, callBack)
	}

	removeEventListener(event){
		Events.removeListener(event)
	}

	emitEvent(next){
		Events.emit(next)
	}

	login(next){
		this.emitEvent(next)
	}
}

module.exports = new Store()
 