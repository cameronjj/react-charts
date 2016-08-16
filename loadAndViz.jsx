import React from 'react';
import ReactDOM from 'react-dom';

export default class LoadAndViz extends React.Component {

	constructor(props){
		super(props)
		this.state = {}
	}

	componentDidMount(){

	}

	render() {
		const dataset = this.state.dataset
		if (dataset){
			return (
				<div>
	        <Viz dataset={dataset}/>
				</div>
			)
		} else {
			return <div>
				loading...
			</div>
		}
	}
}
