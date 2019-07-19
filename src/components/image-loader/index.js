import React from 'react';
import me from '../../images/me.JPG';
import './image-loader.css';

const loaderHtml = () => (<input
	type = "file"
	accept = "image/png, image/jpeg"></input>);

class ImageLoader extends React.Component {

	constructor () {
		super();
		this.state = {
			imagePresent: true,
			height: 0,
			width: 0
		};

		this.image = {};
	}

	createSVG () {
		const self = this;
		this.node.onload = function () {

			self.setState({
				height: this.height,
				width: this.width
			});
		  };

	}

	componentDidMount () {
		this.createSVG();
	}

	render () {
		const {
			imagePresent,
			height,
			width
		} = this.state;
		const {
			modifyMode,
			onMarkerAdd
		} = this.props;

		const imageHtml = (src) => (<img
			ref = {node => this.node = node}

			src = {src}
			alt= {'modifier'}></img>);

		const actualHtml = imagePresent ? imageHtml(me) : loaderHtml();

		return (
			<div className = "image-loader-container">
				{actualHtml}
				{modifyMode ? (<div>Click on the image to start adding points</div>) : ''}
				<svg
					onClick = {modifyMode ? onMarkerAdd : () => {}}
					height = {height}
					width = {width}
					x={0}
					y = {0}></svg>
			</div>
		);
	}
}

export default ImageLoader;