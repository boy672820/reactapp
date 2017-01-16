import React from 'react';

class ContactCreator extends React.Component {
	constructor( props ) {
		super( props );
		// Configure default state
		this.state = {
			name: '',
			phone: ''
		};
	}

	handleChange( e ) {
		let nextState = {};
		nextState[ e.target.name ] = e.target.value;
		this.setState( nextState );
	}

	handleClick() {
		this.props.onCreate( this.state.name, this.state.phone );
		this.setState( {
			name: '',
			phone: ''
		} );
		this.refs.name.focus();
	}

	render() {
		return (
			<div>
				<p>
					<input type="text" name="name" value={this.state.name} placeholder="Name" ref="name" onChange={ this.handleChange.bind( this ) } />
					<input type="text" name="phone" value={this.state.phone} placeholder="phone" onChange={ this.handleChange.bind( this ) } />
					<button type="button" onClick={ this.handleClick.bind( this ) }>Create</button>
				</p>
			</div>
		);
	}
}

export default ContactCreator;
