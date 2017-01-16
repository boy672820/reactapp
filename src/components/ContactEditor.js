import React from 'react';

class ContactEditor extends React.Component {
	constructor( props ) {
		super( props );
		// Configure default state
		this.state = {
			name: '',
			phone: ''
		};
	}

	/**
	 * Component Lifecycle API - 새로운 Props 를 받을 때 호출되는 함수
	 * parent 컴포넌트의 props 데이터("{this.props.contact.name}")를 직접 사용할 수 없으므로
	 * componentWillReceiveProps 를 사용
	 */
	componentWillReceiveProps( nextProps ) {
		this.setState( {
			name: nextProps.contact.name,
			phone: nextProps.contact.phone
		} );
	}

	/** handleChange */
	handleChange( e ) {
		let nextState = {};
		nextState[ e.target.name ] = e.target.value;
		this.setState( nextState );
	}

	/** handleClick */
	handleClick() {
		if ( ! this.props.isSelected ) {
			console.log( 'contact not selected' );
			return;
		}

		this.props.onEdit( this.state.name, this.state.phone );
	}

	render() {
		return (
			<div>
				<p>
					<input type="text" name="name" value={ this.state.name } placeholder="Name" onChange={ this.handleChange.bind( this ) } />
					<input type="text" name="phone" value={ this.state.phone } placeholder="phone" onChange={ this.handleChange.bind( this ) } />
					<button type="button" onClick={ this.handleClick.bind( this ) }>Edit</button>
				</p>
			</div>
		);
	}
}

export default ContactEditor;
