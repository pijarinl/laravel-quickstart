import React from 'react';

export default class EachTask extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			checkEdit: false
		}
		this.onEditTask = this.onEditTask.bind(this);
		this.onSaveClick = this.onSaveClick.bind(this);
		this.onCancelClick = this.onCancelClick.bind(this);
		this.onDeleteTask = this.onDeleteTask.bind(this);

	}

	onEditTask(e){

		this.setState({ checkEdit: true});
	}
	onSaveClick(e){
		e.preventDefault();
		var idTask = this.props.itemId
		var newTask = this.refs.editInput.value;
		this.props.saveTask(idTask,newTask);
		this.setState({checkEdit:false});

	}
	onCancelClick(){
		this.setState({checkEdit: false});
	}

	onDeleteTask(){

		var taskId = this.props.itemId;
		console.log(taskId)
		this.props.removeTask(taskId);
	}

	renderActionSection(){
		if(this.state.checkEdit){
			return(
				<td>
					<button type ="button" className="btn btn-warning" 
						onClick={this.onSaveClick}> Save
					</button>
					<button className="btn btn-danger" onClick={this.onCancelClick} >
						Cancel
					</button>
				</td>
			);
		}
		else{
			return(
				<td>
					<button type ="button" className="btn btn-warning" onClick={this.onEditTask} >Edit
					</button> 

					<button type="button" className="btn btn-danger" onClick={this.onDeleteTask}>Delete
					</button>
				</td>
			);
		}
	};
	
	renderTaskSection(){
		if(this.state.checkEdit){
			return(
				<td>
					<form onSubmit={this.onSaveClick}>
						<input type="text" defaultValue={this.props.itemName} ref="editInput" />
					</form>
				</td>
				);
		}
		else{
			return(
				<td>
					{this.props.itemName}
				</td>
				);
		}
	}

	render(){
		return (
			<tr>
				{this.renderTaskSection()}
				{this.renderActionSection()}
			</tr>
			)
	}

}