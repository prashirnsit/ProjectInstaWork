// 'use strict';

var AppDispatcher = require( './dispatcher');
var store= require('./store.js');
class Actions {
    constructor(){
        // super();
    }
  

    changeUrl(object){
        AppDispatcher.handleViewAction(
            object)
    }

}
module.exports = new Actions()
// export  new Actions();