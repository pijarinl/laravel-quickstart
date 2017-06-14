import React, { Component } from 'react';
import TodoEach from './TodoEach';

class TodoList extends Component {

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
			<TodoEach key={item.id} itemName ={item.name} itemId={item.id}
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

export default TodoList;