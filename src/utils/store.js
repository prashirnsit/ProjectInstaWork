var Dispatcher = require('./dispatcher')
var Events = require('./events')

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
}

module.exports = new Store()
 var SStore = new Store()

Dispatcher.register (function (action) {
	// alert(89)
        switch (action.actionType) {
            case 'close':
            {
              //authentication
              // alert(99)
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