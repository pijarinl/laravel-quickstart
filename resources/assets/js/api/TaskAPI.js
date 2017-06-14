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
	},
	putTask(task){

		var postUrl = `${API_URL}/task`;
    	return API.postInfo(postUrl, JSON.stringify({task}));
	},
	deleteTask(taskId){

		var postUrl = `${API_URL}/task/${taskId}/delete`;
   	 	return API.postInfo(postUrl, null);
	}
}
export default TaskAPI;