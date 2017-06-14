import React from 'react';
import TaskList from './TaskList';
import update from 'immutability-helper';

// import * as TaskActions from '../action/TaskActions';
// import TaskStore from '../store/TaskStore';


class Task1 extends React.Component{

	constructor() {
	 	super();

	 	this.state = {
	 		
	 		items:TaskStore.getAll(),
	 		task : ''
	 	}

	 	this.onChange = this.onChange.bind(this);
	 	this.addTask = this.addTask.bind(this);
	 	this.removeTask = this.removeTask.bind(this);
	 	this.saveTask = this.saveTask.bind(this);
	 	this.createTask = this.createTask.bind(this);
	 	this.getTasks = this.getTasks.bind(this);

	 };
	componentWillMount() {
		
		TaskStore.on("change",this.getTasks);
		console.log("count",TaskStore.listenerCount("change"));
	}
	componentWillUnmount() {
		TaskStore.removeListener("change",this.getTasks);
	}

	getTasks(){
		TaskStore.on("change",() => {
			this.setState({
				items: TaskStore.getAll(),
			});
		});
	}

	addTask(taskName, event){

		event.preventDefault();

		if(!taskName){
			return;
		}
		var items = this.state.items;
		var id = Math.random();
		items = items.concat([{id,taskName}]);

		var task = '';

		this.setState({items,task});

	}

	onChange(e){

		this.setState({task: e.target.value});

	}

	removeTask(taskId){
		console.log(taskId)
		var items = this.state.items;
		items = items.filter(function(eT){
			return eT.id !==taskId;
		});

		this.setState({items});
		return;
	}

	saveTask(idTask,newTask){
		// console.log(this.state.items);
		var index = this.state.items.findIndex(item => item.id == idTask)
		// item.taskName = newTask;
		this.setState({items: update(this.state.items, {
			[index]: {
				taskName: {$set: newTask}
			}
		})})
		// console.log(this.state.items)
	}

	createTask(taskName){
		TaskActions.createTask(taskName);
	}

	reloadTask(){
		TaskActions.reloadTask();
	}
	GetAPITask(){
		TaskActions.getTask();
	}
	render(){
		return(
			<div className="form-group">
				
				<form onSubmit={this.addTask.bind('this', this.state.task)} className="form-horizontal">
					<label  className="col-sm-3 control-label"> Task </label>
					<input onChange={this.onChange} value={this.state.task} className="form-control"/>
					<button className="btn btn-default fa fa-plus">Add Task</button>
				</form>

				<button className="btn btn-default fa fa-plus" onClick={this.createTask.bind('this',this.state.task)}>
					TestFlux
				</button>
				<button className="btn btn-default fa fa-plus" onClick={this.reloadTask}>
					Reload
				</button>
				<button className="btn btn-default fa fa-plus" onClick={this.GetAPITask}>
					GetAPI
				</button>

				<div className = "panel panel-default">
					<div className="panel-heading">
                   	 	Current Tasks
                	</div>
                	<div className="panel-body">
						<TaskList items={this.state.items}
							removeTask={this.removeTask} 
							saveTask={this.saveTask}/>
					</div>
				</div>
			</div>

			);
	}
}
export default Task1;
