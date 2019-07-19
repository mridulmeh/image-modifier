import React from 'react';
import { DotMaker } from '..';

const generateMaskFromObjectes = (objects) => {
	const maskHtml = [];
	 Object.entries(objects).forEach(obj => {
		const { length,view, breadth, x, y } = obj[1];
		if(view){
			maskHtml.push( (<rect fill={"#000"} stroke = {'#fff'} x= {x}
				y = {y}	width={breadth}	height = {length}/>));
		}
	});
	return maskHtml;
};

class RectMaker extends React.Component {

	render () {
		const {
			objects
		} = this.props;
		let areAnyObjInView = false;
		let dotHtml = [];

		const mainMasker = (<mask id={`mask-show`}>

			<rect fill={"#fff"} stroke = {'#fff'} 	x={0}
				y={0}
				width={'100%'}
				height = {'100%'}/>
			{generateMaskFromObjectes(objects)}
		</mask>);

		Object.entries(objects).forEach(obj => {
			const { view, dots } = obj[1];
			if(view){
				areAnyObjInView = true;
				dotHtml.push(<DotMaker dots = {dots}></DotMaker>);
			}
		});

		return (
			<g>
				{mainMasker}
				{dotHtml}
				<rect
					mask={`url(#mask-show)`}
					x={0}
					y={0}
					width={'100%'}
					height = {'100%'}
					stroke = {'white'}
					fill = {areAnyObjInView ? 'rgba(0,0,0,0.5)' : 'none'}></rect>

			</g>
		);
	}
}

export default RectMaker;