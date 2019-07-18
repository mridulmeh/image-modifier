import React from 'react';

class ToolButton extends React.Component {

	render () {
		const {
			onSubmit
		} = this.props;

		return (
			<div>
				<button onClick = {onSubmit}>...</button>
			</div>
		);
	}
}

export default ToolButton;