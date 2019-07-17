import React from 'react';
import { ToolButton, ImageLoader, VisibilityToggler } from '../../components';
import './modifier.css';

class ImageModifier extends React.Component {

	render () {
		
		return (
			<div>
				<div className = "section left-section">
                	<ToolButton></ToolButton>
				</div>
				<div className = "section middle-section">
               		<ImageLoader></ImageLoader>
				</div>
				<div className = "section right-section">
                	<VisibilityToggler></VisibilityToggler>
				</div>
            </div>
		);
	}
}

export default ImageModifier;