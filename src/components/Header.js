import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<ul>
					<li><Link to="home">Home</Link></li>
					<li><Link to="about">about</Link></li>
					<li><Link to="Contacts">Contacts</Link></li>
				</ul>
			</div>
		);
	}
}

export default Header;
