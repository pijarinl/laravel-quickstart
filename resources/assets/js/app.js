import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import TodoContainer from './components/TodoContainer';

import createDefaultPage from './components/createDefaultPage';
import createAbout from './components/createAbout';
import createTopics from './components/createTopics';
import createTodo from './components/createTodo'

import Task1 from './components/Task1';

render((
	<Router history={browserHistory}>
		<div>
			<Route path='/count' component={createDefaultPage}>
				<Route path='/count/test1' component={createAbout} />
				<Route path='/count/test2' component={createTopics} />
			</Route> 
			
			<Route path="/react" component={Task1} />
			
			<Route component={TodoContainer}>
				<Route path="/todo" component={createTodo} />
			</Route>
		
		</div>
	</Router>
	
),document.getElementById('root'));
