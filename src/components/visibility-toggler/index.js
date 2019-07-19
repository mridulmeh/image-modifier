import React from 'react';
import show from '../../images/show.png';
import hide from '../../images/hide.png';
import './visibility-toggler.css';

class VisibilityToggler extends React.Component {

	render () {
		const {
			objects,
			onToggle,
			modifyMode
		} = this.props;

		const objHtml = (objName, objValue) => (
			<div className = "visibility-toggle-row-container">
				<div
					key = {objName}
					onClick = {() => onToggle(objName)}
					className = "visibility-toggle-row">
					<img
						className = "visibility-toggle-eye visibility-toggle-section"
						src = {objValue.view ? show : hide}

						alt = {'toggleVisibility'}>
					</img>
					<div className = "visibility-toggle-name visibility-toggle-section">{objName}</div>
				</div>
			</div>);

		const toggleHtml = 	Object.entries(objects).map(e => (
			<div key = {e[0]}>
				{objHtml(e[0], e[1])}
			</div>
		));

		return (
			<div className = "visibility-toggle">
				<div className = "visibility-toggle-header">
					<span>Edit Mode : <b>{modifyMode ? 'ON' : 'OFF'}</b></span>
				</div>
				{toggleHtml}

			</div>
		);
	}
}

export default VisibilityToggler;