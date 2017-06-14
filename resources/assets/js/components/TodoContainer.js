import React, { Component, PropTypes } from 'react';
import {Container} from 'flux/utils';

import TaskStore from '../store/TaskStore';
import TaskActions from '../action/TaskActions';

class TodoContainer extends Component {
	componentDidMount() {
		TaskActions.getTaskCases();
	}
	render(){
		let content = this.props.children && React.cloneElement(this.props.children, {
			ready: this.state.storeState.ready,
			todos: this.state.storeState.items,
			task: this.state.storeState.task,
		});

		return content;
	}
}
TodoContainer.getStores = () => ([TaskStore]);
TodoContainer.calculateState = (prevState) => ({
	storeState: TaskStore.getState(),
});
export default Container.create(TodoContainer);