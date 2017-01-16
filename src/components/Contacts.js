import React from 'react';
import ReactUpdate from 'react-addons-update';

import ContactInfo from './ContactInfo';
import ContactCreator from './ContactCreator';
import ContactRemover from './ContactRemover';
import ContactEditor from './ContactEditor';

class Contacts extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			contacts: [
				{ name: 'Abet', phone: '010-0000-0001' },
				{ name: 'Betty', phone: '010-0000-0002' },
				{ name: 'Charlie', phone: '010-0000-0003' },
				{ name: 'David', phone: '010-0000-0004' }
			],
			selectedKey: -1,
			selected: {
				name: '',
				phone: ''
			}
		};
	}

	/** _createContact */
	_createContact( name, phone ) {
		let newState = ReactUpdate( this.state, {
			contacts: {
				$push: [ { 'name': name, 'phone': phone } ]
			}
		} );
		this.setState( newState );
	}

	/** _onSelect */
	_onSelect( key ) {
		if ( key === this.state.selectedKey ) {
			console.log( 'key select cancelled' );
			this.setState( {
				selectedKey: -1,
				selected: {
					name: '',
					phone: ''
				}
			} );
			return;
		}

		this.setState( {
			selectedKey: key,
			selected: this.state.contacts[ key ]
		} );
		console.log( key + ' is selected' );
	}

	/** _isSelected */
	_isSelected( key ) {
		if ( key === this.state.selectedKey )
			return true;
		else
			return false;
	}

	/** _removeContact */
	_removeContact() {
		if ( this.state.selectedKey === -1 ) {
			console.log( 'contact not selected' );
			return;
		}

		this.setState( {
			contacts: ReactUpdate(
				this.state.contacts,
				{ $splice: [
					[ this.state.selectedKey, 1 ]
				] }
			),
			selectedKey: -1
		} );
	}

	/** _editContact */
	_editContact( name, phone ) {
		this.setState( {
			contacts: ReactUpdate(
				this.state.contacts,
				{ [ this.state.selectedKey ]: {
					name: { $set: name },
					phone: { $set: phone }
				} }
			),
			selected: {
				name: name,
				phone: phone
			}
		} );
	}

	render() {
		return (
			<div>
				<h1>Contacts</h1>
				<ul>
					{ this.state.contacts.map( ( contact, i ) => {
						return (
							<ContactInfo
								name={ contact.name }
								phone={ contact.phone }
								key={ i }
								contactKey={ i }
								isSelected={ this._isSelected.bind( this )( i ) }
								onSelect={ this._onSelect.bind( this ) } />
						);
					} ) }
				</ul>
				<ContactCreator onCreate={ this._createContact.bind( this ) } />
				<ContactRemover onRemove={ this._removeContact.bind( this ) } />
				<ContactEditor onEdit={ this._editContact.bind( this ) } isSelected={ ( this.state.selectedKey !== -1 ) } contact={ this.state.selected } />
			</div>
		);
	}
}

export default Contacts;
