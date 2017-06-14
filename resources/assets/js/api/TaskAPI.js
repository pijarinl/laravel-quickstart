import 'babel-polyfill';
import 'whatwg-fetch';
import API from './API'
import _ from 'lodash';

const API_URL = '/api';
const API_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

let TaskAPI = {

	getTasks(){

		var getUrl = `${API_URL}/tasks`;
		
		return API.getInfo(getUrl);
	}
}
export default TaskAPI;