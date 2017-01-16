import React from 'react';

class ContactInfo extends React.Component {
	/**
	 * Component Lifecycle API - 새로운 Props 와 State 가 수신될 때 렌더링 전 호출되는 함수
	 * 현재 Props 와 다음 Props 를 비교하여 불필요한 리렌더링을 방지
	 */
	shouldComponentUpdate( nextProps, nextState ) {
		return ( JSON.stringify( nextProps ) !== JSON.stringify( this.props ) );
	}

	/** handleClick */
	handleClick() {
		this.props.onSelect( this.props.contactKey );
	}

	render() {
		let getStyle = is_selected => {
			if ( ! is_selected ) return;

			let style = {
				fontWeight: 'bold',
				backgroundColor: '#4efcd8'
			};
			return style;
		};

		console.log( 'rendered: ' + this.props.name );

		return (
			<li style={ getStyle( this.props.isSelected ) } onClick={ this.handleClick.bind( this ) }>{this.props.name} {this.props.phone} {this.props.isSelected}</li>
		);
	}
}

export default ContactInfo;
