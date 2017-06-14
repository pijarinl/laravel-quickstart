import React from 'react';
import {Link} from 'react-router';

class createDefaultPage extends React.Component {
	render(){
		return (
			<div className="container">
				<div className="row">
					<h1>test</h1>
					{this.props.children}
					<Link to='/count/test1'>About.  </Link>
					<Link to='/count/test2'>  Toppic</Link>

				</div>
			</div>
			);
	}
}
export default createDefaultPage;