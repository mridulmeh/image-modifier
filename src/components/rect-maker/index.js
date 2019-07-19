import React from 'react';

class RectMaker extends React.Component {

	render () {
		const {
			objects
		} = this.props;

		let html = [];

		Object.entries(objects).forEach(obj => {
			const name = obj[0];
			const { view, length, breadth, x, y } = obj[1];
			if(view){
				html.push((<rect
					x= {x}
					y = {y}
					width={breadth}
					height = {length}
					stroke = {'white'}
					fill = {'none'}></rect>));
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