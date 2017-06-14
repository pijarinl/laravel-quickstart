import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router';

import TodoList from './TodoList';
import update from 'immutability-helper';

import TaskActions from '../action/TaskActions';
import TaskStore from '../store/TaskStore';

class createTodo extends React.Component{

	constructor(props) {
	 	super(props);
	 	
	 	this.state = {
	 		
	 		items: this.props.todos,
	 		task : ''
	 	}

	 	this.onChange = this.onChange.bind(this);
	 	this.addTask = this.addTask.bind(this);
	 	this.removeTask = this.removeTask.bind(this);
	 	this.saveTask = this.saveTask.bind(this);
	 	this.getTaskAPI = this.getTaskAPI.bind(this);
	 };


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
		var items = this.state.items;
		items = items.filter(function(eT){
			return eT.id !==taskId;
		});

		this.setState({items});
		return;
	}

	saveTask(idTask,newTask){
		var index = this.state.items.findIndex(item => item.id == idTask)
		// item.taskName = newTask;
		this.setState({items: update(this.state.items, {
			[index]: {
				name: {$set: newTask}
			}
		})})
	}
	getTaskAPI(){
		var items = this.state.items;

		items = this.props.todos;
		this.setState({items});

	}
	render(){
		if(!this.props.ready){
			return <h1>not yet</h1>
		}

		return(
			<div className="form-group">
				
				<form onSubmit={this.addTask.bind('this', this.state.task)} className="form-horizontal">
					<label  className="col-sm-3 control-label"> Task </label>
					<input onChange={this.onChange} value={this.state.task} className="form-control"/>
					<button className="btn btn-default fa fa-plus">Add Task</button>
				</form>
				
 				<button className="btn btn-default fa fa-plus" onClick = {this.getTaskAPI} >API Task</button>

				<div className = "panel panel-default">
					<div className="panel-heading">
                   	 	Current Tasks
                	</div>
                	<div className="panel-body">
						<TodoList items={this.state.items}
							removeTask={this.removeTask} 
							saveTask={this.saveTask}/>
					</div>
				</div>
			</div>

			);
	}
}
export default createTodo;
