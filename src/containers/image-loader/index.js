import React from 'react';
import me from '../../images/me.JPG';
import './image-loader.css';
import DotMaker from '../../components/dot-maker';
import { RectMaker } from '../../components';

const loaderHtml = () => (<input
	type = "file"
	accept = "image/png, image/jpeg"></input>);

class ImageLoader extends React.Component {

	constructor () {
		super();
		this.maxDots = 4;
		this.state = {
			imagePresent: true,
			height: 0,
			width: 0,
			dots: []
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

	addDot (event) {
		const {
			onMarkerAdd
		} = this.props;
		const {
			dots
		} = this.state;
		let newDots = dots;

		const svgDim = event.target.getBoundingClientRect();

		if(newDots.length < this.maxDots){
			newDots.push({
				x: event.clientX - svgDim.x,
				y: event.clientY - svgDim.y
			});
		}
		if(newDots.length === this.maxDots){
			onMarkerAdd(newDots);
			newDots = [];
		}

		this.setState({
			dots: newDots
		});

	}

	render () {
		const {
			imagePresent,
			height,
			width,
			dots
		} = this.state;
		const {
			modifyMode,
			objects,
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
					onClick = {(e) => modifyMode ? this.addDot(e) : (() => {})()}
					height = {height}
					width = {width}
					x={0}
					y = {0}>
					<DotMaker dots = {dots}></DotMaker>
					<RectMaker objects = {objects}></RectMaker>
				</svg>
			</div>
		);
	}
}

export default ImageLoader;