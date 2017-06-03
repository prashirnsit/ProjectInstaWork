'use strict';

var Flux =require('flux');

class Dispatcher extends Flux.Dispatcher {
    /**
   * A bridge function between the views and the dispatcher, marking the action
   * as a view action.  Another variant here could be handleServerAction.
   * @param  {object} action The data coming from the view.
   */
    handleViewAction(action) {

        this.dispatch({
            actionType: action.type,
            item: action.item,
            index: action.index
        });

    };
}

module.exports = new Dispatcher()