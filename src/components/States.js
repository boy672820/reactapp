import React from 'react';

class States extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			header: 'Header Initial State',
			content: 'Content Initial State'
		};
	}

	updateHeader( text ) {
		this.setState( {
			header: 'Header has changed'
		} );
	}

	render() {
		return (
			<div>
				<h1>{this.state.header}</h1>
				<h2>{this.state.content}</h2>
				<button type="button" onClick={this.updateHeader.bind( this )}>Update</button>
			</div>
		);
	}
}

export default States;
