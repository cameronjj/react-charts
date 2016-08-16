import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import Viz from './viz'

export default class LoadAndViz extends React.Component {

	constructor(props){
		super(props)
		this.state = {}
	}

	componentDidMount(){
		axios.get('https://naturenet.firebaseio.com/observations.json')
		  .then((response) => {
		    console.log(response);
				this.setState({dataset: response.data})
		  })
		  .catch(function (error) {
		    console.log(error);
		  })
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
