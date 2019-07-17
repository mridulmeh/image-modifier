import React from 'react';
import me from '../../images/me.JPG'

const loaderHtml = ()=>(<input 
	type = "file" 
	accept = "image/png, image/jpeg"></input>)
const imageHtml = (src)=>(<img src = {src} alt= {'modifier'}></img>)

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
		} = this.state

		const actualHtml = imagePresent ? imageHtml(me):  loaderHtml() 

		return (
			<div>
				{actualHtml}
			</div>
		);
	}
}

export default ImageLoader;