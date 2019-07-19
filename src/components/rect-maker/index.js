import React from 'react';
import { DotMaker } from '..';

class RectMaker extends React.Component {

	render () {
		const {
			objects
		} = this.props;

		let html = [];

		Object.entries(objects).forEach(obj => {

			const { view, length, breadth, x, y, dots } = obj[1];
			if(view){
				const rect = (
					<g>
						<DotMaker dots = {dots}></DotMaker>
						<rect
							x= {x}
							y = {y}
							width={breadth}
							height = {length}
							stroke = {'white'}
							fill = {'none'}></rect>
					</g>);
				html.push(rect);
			}
		});

		return (
			<g>
				{html}

			</g>
		);
	}
}

export default RectMaker;