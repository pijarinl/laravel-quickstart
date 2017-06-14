import {ReduceStore} from 'flux/utils';
import update from 'immutability-helper';
import 'babel-polyfill';

import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants/ActionTypes';

class TaskStore extends ReduceStore{
	getInitialState() {
		return{
			ready: false,
			items: [],
			task: "",
			idRandom: "",
		}
	}
	reduce(state, action){
		switch(action.type){
			// case ActionTypes.GET_TASK :{
 		// 		return "pass";
 		// 	}
 			case ActionTypes.GET_TASK_SUCCESS :{
 				console.log("get task Success")
 				return update(
 					state, {
 						ready: {$set: true},
 						items: {$merge: action.payload.response.tasks}
 					}
 				);
 			}
 			case ActionTypes.GET_NEWTASK : {
 				console.log(action.payload.task)
 				state.idRandom = Math.random()
 				return update(state, {
 					items: {$push: [{id: state.idRandom, name: action.payload.task}]}
 				})
 			}
 			case ActionTypes.CHANGE_TASK : {
	 			return update(state,{
	 				task: {$set: action.payload.value},
	 			})
	 		}
 			case ActionTypes.GET_NEWTASK_SUCCESS : {
				var index = state.items.findIndex(item => item.id == state.idRandom)
 				// var items = state.items;
 				//ต้องหาชื่อมาให้ตรงกันแล้วแก้ ID
 		// 		[index]: {
			// 	name: {$set: newTask}
			// }
			console.log(action.payload.response.task.id)
 				return update(state,{
 					items:{
 						[index]:{id:{$set: action.payload.response.task.id}}},
 				})
 			}
 			default:
 				return state;
		}
	}
}
export default new TaskStore(AppDispatcher);

// import {EventEmitter} from "events";

// import dispatcher from '../dispatcher';
// import ActionTypes from '../constants/ActionTypes';

// class TaskStore extends EventEmitter{
//  	constructor(props) {
//  		super(props);
//  		this.items = [
//  				{
// 	 				id:1,
// 	 			  	taskName:'test for task'
// 	 			},
// 	 			{
// 	 				id:2,
// 	 				taskName:'test2 for task'
// 	 			}
//  		];
//  	}
//  	createTask(taskName){
//  		const id = Math.random();

//  		this.items.push({
//  			id,
//  			taskName,

//  		});

//  		this.emit("change");
//  	}

//  	getAll(){
//  		return this.items;
//  	}

//  	handleAction(action){
//  		//respone only we care about if not dont do anything
//  		switch(action.type){
//  			case "CREATE_TASK": {

//  				this.createTask(action.taskName);
//  				break;

//  			}
//  			case "RECEIVE_TASK": {

//  				this.items = action.items;
//  				this.emit("change");
//  				break;
//  			}
//  			case "GET_TASK": {

//  				this.items = action.items;
//  				this.emit("change");
//  				break;
//  			}
//  			case ActionTypes.GET_TASK :{
//  				console.log('payload')
//  				console.log(action.payload.response.tasks);
//  				break;
//  			}

//  		}
//  		console.log("Task an action ", action);

//  	}
// }
// const taskStore = new TaskStore;

// dispatcher.register(taskStore.handleAction.bind(taskStore));
// window.dispatcher = dispatcher; 
// export default taskStore;

