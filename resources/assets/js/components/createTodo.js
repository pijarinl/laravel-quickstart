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
	 	this.onChange = this.onChange.bind(this);
	 	this.addTask = this.addTask.bind(this);
	 	this.removeTask = this.removeTask.bind(this);
	 	this.saveTask = this.saveTask.bind(this);
	 };


	addTask(event){
		event.preventDefault();

		if(!this.props.task){
			return;
		}
		TaskActions.putNewTask(this.props.task)

	}

	onChange(e){
		TaskActions.onTaskChange(e.target.value);


	}
	removeTask(taskId){
		TaskActions.deleteTask(taskId);
		 return;
	}

	saveTask(idTask,newTask){
		var index = this.state.items.findIndex(item => item.id == idTask)
		this.setState({items: update(this.state.items, {
			[index]: {
				name: {$set: newTask}
			}
		})})
	}
	render(){
		if(!this.props.ready){
			return <h1>not yet</h1>
		}

		return(
			<div className="form-group">
				
				<form onSubmit={this.addTask} className="form-horizontal">
					<label  className="col-sm-3 control-label"> Task </label>
					<input onChange={this.onChange} value = {this.props.task} className="form-control"/>
					<button className="btn btn-default fa fa-plus">Add Task</button>
				</form>


				<div className = "panel panel-default">
					<div className="panel-heading">
                   	 	Current Tasks
                	</div>
                	<div className="panel-body">
						<TodoList items={this.props.todos}
							removeTask={this.removeTask} 
							saveTask={this.saveTask}/>
					</div>
				</div>
			</div>

			);
	}
}
export default createTodo;
