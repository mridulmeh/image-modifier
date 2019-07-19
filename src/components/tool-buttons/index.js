import React from 'react';
import './tool-buttons.css';

class ToolButton extends React.Component {

	render () {
		const {
			onSubmit
		} = this.props;

		return (
			<div className = "tool-button-box">
				<button onClick = {onSubmit}>Add</button>
			</div>
		);
	}
}

export default ToolButton;