var Dispatcher = require('./dispatcher')
var Events = require('./events')
import Actions from './actions'

import {
  AsyncStorage
} from 'react-native';

var DummyData = [
    {
      'name':'Sachin',
      'lastName':'Tendulkar',
      'location': '29 45',
      'email':'sachin@daf.com',
      'admin':'yes'
    },
    {
      'name':'mario',
      'lastName':'lopez',
      'location': '66 56',
      'email':'sachin@daf.com',
      'admin':'no'
    },
    
    {
      'name':'Hugh',
      'lastName':'JackMan',
      'location': '168 456',
      'email':'sachin@daf.com',
      'admin':'yes'
    },
    {
      'name':'Virender',
      'lastName':'sehwag',
      'location': '66 45',
      'email':'sehwag@daf.com',
      'admin':'yes'
    },
    {
      'name':'alexander',
      'lastName':'',
      'location': '35 45',
      'email':'alexander@daf.com',
      'admin':'yes'
    },
   {
      'name':'alexander',
      'lastName':'',
      'location': '68.99 45',
      'email':'sachin@daf.com',
      'admin':'yes'
    },
]
var returnData;
var trueValue = false

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

getTrueValue(){
  return trueValue;
}
async _addTask () {

  var t = JSON.stringify(DummyData)
    returnData = DummyData
    await AsyncStorage.setItem('data', t,()=>{
  Actions.changeUrl({type:'saved',item:{}, index:0})

    })

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
    

  this._addTask()

}
storeDat1(data){
  returnData = data
}
setData1(object, index, replace="newone"){
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