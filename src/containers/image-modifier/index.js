import React from 'react';
import { ToolButton, VisibilityToggler } from '../../components';
import ImageLoader from '../image-loader';
import './modifier.css';

class ImageModifier extends React.Component {

	constructor () {
		super();
		this.state = {
			modifyMode: false,
			numOfObjects: 0,
			objects: {

			}
		};
	}

	changeModifyMode () {
		this.setState((prevState) => ({
			modifyMode: !prevState.modifyMode
		}));
	}

	toggleObject (obj) {
		this.setState((prevState) => {
			const objects = prevState.objects;
			objects[obj].view = !objects[obj].view;

			return {
				objects
			};
		});
	}

	addObjects (dots) {
		let xBounds = [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY];
		let yBounds = [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY];

		dots.forEach(e => {
			xBounds = [Math.min(xBounds[0], e.x), Math.max(xBounds[1], e.x)];
			yBounds = [Math.min(yBounds[0], e.y), Math.max(yBounds[1], e.y)];
		});
		const rectDots = [];
		xBounds.forEach(x => {
			yBounds.forEach(y => {
				rectDots.push({ x, y });
			});
		});

		this.setState((prevState) => {

			const prevObj = prevState.objects;
			const objectsLength = prevState.numOfObjects;

			prevObj[`Obj${objectsLength + 1}`] = {
				view: true,
				length: yBounds[1] - yBounds[0],
				breadth: xBounds[1] - xBounds[0],
				x: xBounds[0],
				y: yBounds[0],
				dots: rectDots

			};

			return {
				objects: prevObj,
				numOfObjects: objectsLength + 1
			};
		});
	}

	render () {
		const {
			objects,
			modifyMode
		} = this.state;

		return (
			<div>
				<div className = "section left-section">
                	<ToolButton onSubmit = {() => this.changeModifyMode()}></ToolButton>
				</div>
				<div className = "section middle-section" >
					   <ImageLoader
					   objects = {objects}
					   onMarkerAdd = {(...params) => this.addObjects(...params)}
					   modifyMode = {modifyMode}></ImageLoader>
				</div>
				<div className = "section right-section">
					<VisibilityToggler
					 objects = {objects}
					 onToggle = {(obj) => this.toggleObject(obj)}></VisibilityToggler>
				</div>
			</div>
		);
	}
}

export default ImageModifier;