import AppDispatcher from '../dispatcher';
import TaskAPI from '../api/TaskAPI';
import ActionTypes from '../constants/ActionTypes';

let TaskActions = {
	getTaskCases(){
		console.log('in')
		AppDispatcher.dispatchAsync(TaskAPI.getTasks(),{
			request: ActionTypes.GET_TASK,
      		success: ActionTypes.GET_TASK_SUCCESS,
     		failure: ActionTypes.GET_TASK_ERROR
		});
	},
	onTaskChange(value){
		AppDispatcher.dispatch({
			type:ActionTypes.CHANGE_TASK,
			payload:{value}
		});
	},
	putNewTask(task){
		AppDispatcher.dispatchAsync(TaskAPI.putTask(task),{
			request: ActionTypes.GET_NEWTASK,
      		success: ActionTypes.GET_NEWTASK_SUCCESS,
     		failure: ActionTypes.GET_NEWTASK_ERROR
		}, {task});
	},
}

export default TaskActions;

// export function createTask(taskName){
// 	AppDispatcher.dispatch({
// 		type: "CREATE_TASK",
// 		taskName,
// 	});
// }
// export function deleteTask(id){
// 	AppDispatcher.dispatch({
// 		type: "DELETE_TASK",
// 		id,
// 	});
// } 
// export function editTask(id){
// 	AppDispatcher.dispatch({
// 		type: "EDIT_TASK",
// 		id,
// 	});
// }
// export function reloadTask(){
// 	// axios("http://someurl.com/somedataendpoint").then((data)=>{
// 	// 	console.log("got the data",data)
// 	// })
// 	AppDispatcher.dispatch({type: "FETCH_TASK"});
// 	setTimeout(() => {
// 		AppDispatcher.dispatch({type: "RECEIVE_TASK", items: [
// 				{
// 	 				id:34,
// 	 			  	taskName:'test3 for task'
// 	 			},
// 	 			{
// 	 				id:43,
// 	 				taskName:'test4 for task'
// 	 			}
// 			]});

// 		if(false){
// 			AppDispatcher.dispatch({type: "FETCH_TASK_ERROR"})
// 		}
// 	},1000);
// }
// export function getTask(){

// 	// console.log(TaskAPI.getTasks())
// 	AppDispatcher.dispatchAsync(TaskAPI.getTasks(),{
// 		request: ActionTypes.GET_TASK,
// 		success: ActionTypes.GET_TASK_SUCCESS,
// 		failure: ActionTypes.GET_TASK_ERROR,
// 	});
// }
