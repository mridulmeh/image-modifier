import React from 'react';
import me from '../../images/me.JPG';

const loaderHtml = () => (<input
	type = "file"
	accept = "image/png, image/jpeg"></input>);

class ImageLoader extends React.Component {

	constructor () {
		super();
		this.state = {
			imagePresent: true
		};

		this.image = {};
	}

	render () {
		const {
			imagePresent
		} = this.state;
		const {
			modifyMode,
			onMarkerAdd
		} = this.props;

		const imageHtml = (src) => (<img
			onClick = {modifyMode ? onMarkerAdd : () => {}}
			src = {src}
			alt= {'modifier'}></img>);

		const actualHtml = imagePresent ? imageHtml(me) : loaderHtml();

		return (
			<div>
				{actualHtml}
				{modifyMode ? (<div>Click on the image to start adding points</div>) : ''}

			</div>
		);
	}
}

export default ImageLoader;