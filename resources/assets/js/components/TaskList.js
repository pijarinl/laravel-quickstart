import React, { Component } from 'react';
import EachTask from './eachTask';

class TaskList extends Component {

	saveTask(idTask,newTask){
		this.props.saveTask(idTask,newTask);
	}
	removeTask(taskId){
		console.log(taskId)
		this.props.removeTask(taskId);
	}
	renderItems(){
		console.log(this.props.items)

		return this.props.items.map((item) => 
			<EachTask key={item.id} itemName ={item.taskName} itemId={item.id}
				saveTask={this.saveTask.bind(this)} 
				removeTask={this.removeTask.bind(this)}
			/>);
	}

	render() {


		return (
			<table className="table table-striped task-table">
				
                <tbody>
					{this.renderItems()}
				</tbody>
			</table>
		);
	}
}

export default TaskList;