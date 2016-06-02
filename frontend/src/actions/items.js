var api = require('../service/api.js')
import * as ActionTypes from './constants';

export function fetchItems() {

	console.log("fetchItems");

    return dispatch => {
    	dispatch({
    		type: ActionTypes.FETCHING_ITEMS
    	});
    	
		api.getAll((error, data) => {
	        if (error) {
	        } else {
	        	console.log("Got data: " + JSON.stringify(data));

	        	dispatch({
	        		type: ActionTypes.GET_ITEMS,
	        		items: data
	        	});
        	} 

	    });


    };
}

export function fetchItem(itemId) {

	console.log("fetchItem " + itemId);

    return dispatch => {
    	
		api.getItem((error, data) => {
	        if (error) {
	        } else {
	        	console.log("Got data: " + JSON.stringify(data));

	        	dispatch({
	        		type: ActionTypes.GET_ITEM,
	        		item: data
	        	});
        	} 

	    });


    };
}
