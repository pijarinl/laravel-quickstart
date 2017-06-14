import 'babel-polyfill';
import 'whatwg-fetch';
import _ from 'lodash';

const API_URL = '/api';
const API_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'X-CSRF-TOKEN': window.Laravel.csrfToken,
  'Authorization': 'Bearer ' + window.Laravel.apiToken
};

let API = {
	getInfo(getUrl){
		return fetch(getUrl,
		{
			method: 'GET',
			headers: API_HEADERS
		})
		.then(function(response){
			// console.log("response"+response.jason)
			return response.json();
		})
	},
	postInfo(postUrl, postBody, cb, cbError) {
    	return fetch(postUrl,
	    {
	      	method: 'POST',
	      	credentials: 'same-origin',
	      	headers: API_HEADERS,
	      	body: postBody
	    })
	    .then(function(response){ 
	      	return response.json();
	    });	
  	},
}
export default API