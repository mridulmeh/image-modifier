import React from 'react';

const fillColors = ['red', 'blue', 'green', 'yellow'];

class DotMaker extends React.Component {

	render () {
		const {
			dots,
			fill,
			stroke
		} = this.props;

		const dotHtml = dots.map((e, i) => {
			return (<circle
				 key= {i}
				 cx = {e.x}
				 cy = {e.y}
				 r= {5}
				 fill = {fill || fillColors[i]}
				 stroke = {stroke || "white"}></circle>);
		});

		return (
			<g>
				{dotHtml}
			</g>
		);
	}
}

export default DotMaker;