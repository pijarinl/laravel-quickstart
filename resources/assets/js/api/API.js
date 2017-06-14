import 'babel-polyfill';
import 'whatwg-fetch';
import _ from 'lodash';

const API_URL = '/api';
const API_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
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
	}
}
export default API