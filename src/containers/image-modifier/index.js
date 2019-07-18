import React from 'react';
import { ToolButton, ImageLoader, VisibilityToggler } from '../../components';
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

	addObjects () {
		this.setState((prevState) => {

			const prevObj = prevState.objects;
			const objectsLength = prevState.numOfObjects;

			prevObj[`Obj${objectsLength + 1}`] = {
				view: true
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
					   onMarkerAdd = {() => this.addObjects()}
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