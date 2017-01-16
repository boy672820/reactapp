import React from 'react';

import Header from './Header';
import RandomNumber from './RandomNumber';
import Contacts from './Contacts';

class App extends React.Component {
	constructor( props ) {
		super( props );

		this.state = { value: Math.round( Math.random() * 100 ) };
		this.updateValue = this.updateValue.bind( this );
	}

	updateValue( randomValue ) {
		this.setState( {
			value: randomValue
		} );
	}

	render() {
		return (
			<div>
				<Header title={this.props.headerTitle} />
				<hr />
				<RandomNumber number={this.state.value} onUpdate={this.updateValue} />
				<hr />
				{ this.props.children }
			</div>
		);
	}
}

App.defaultProps = { headerTitle: 'header' };

export default App;
