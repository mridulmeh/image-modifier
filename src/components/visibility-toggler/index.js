import React from 'react';
import show from '../../images/show.png';
import hide from '../../images/hide.png';
import './visibility-toggler.css';

class VisibilityToggler extends React.Component {

	render () {
		const {
			objects,
			onToggle
		} = this.props;

		const objHtml = (objName, objValue) => (<div key = {objName} className = "visibility-toggle-row">
			<img
				className = "visibility-toggle-eye visibility-toggle-section"
				src = {objValue.view ? show : hide}
				onClick = {() => onToggle(objName)}
				alt = {'toggleVisibility'}>
			</img>
			<div className = "visibility-toggle-name visibility-toggle-section">{objName}</div>
		</div>);

		const toggleHtml = 	Object.entries(objects).map(e => (
			<div key = {e[0]}>
				{objHtml(e[0], e[1])}
			</div>
		));

		return (
			<div className = "visibility-toggle">
				{toggleHtml}
			</div>
		);
	}
}

export default VisibilityToggler;