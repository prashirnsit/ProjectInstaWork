var Dispatcher = require('./dispatcher')
var Events = require('./events')
import Actions from './actions'

import {
  AsyncStorage
} from 'react-native';

var DummyData = [

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
var returnData;


class Store {
  constructor(){
    this.state={
      data:DummyData
    }
  }
	addListener(event, callBack){
		Events.on(event, callBack)
	}

	removeEventListener(event){
		Events.removeListener(event)
	}

	emitEvent(next, item, index){
		Events.emit(next, item, index)
	}

	page(next, item, index){
		this.emitEvent(next, item, index)
	}
  getdata(){
    if(returnData){
      DummyData = returnData
      return returnData

    }
    else
      return DummyData
}
storeDat(data){
  returnData = data
}
setData(object, index, replace="newone"){
  var that = this
  if(Object.keys(object).length){
    if(replace == 'replace'){
      DummyData[index] = object
    }
    else
      DummyData.push(object)
  }
  else
    DummyData.splice(index, 1); 
  var t = JSON.stringify(DummyData)
returnData = DummyData
AsyncStorage.setItem('data', t, ()=> {

  setTimeout(()=>Actions.changeUrl({type:'saved',item:{}, index:0}), 400)
                    })
}
}

module.exports = new Store()
 var SStore = new Store()

Dispatcher.register (function (action) {
        // AsyncStorage.setItem('data', gtdata, ()=> {
        //             })
        
        switch (action.actionType) {
            case 'close':
            {
              
              SStore.page('close');
              break;
            }
            case 'edit':
            {
              SStore.page('edit', action.item, action.index);
              
              break;
            }
            case 'newContact':
            {

              SStore.page('newContact');
              
              break;
            }
            case 'saved':
            {

              SStore.page('close');
              
              break;
            }
            default:
            {
                return true;
            }
        }
    });