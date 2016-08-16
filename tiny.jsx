import React from 'react';
import ReactDOM from 'react-dom';
import {BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import _ from 'lodash'

class TinyBarChart extends React.Component{
	render () {
		const height = this.props.height
		const dataKey = this.props.dataKey
    const data = this.props.data
		const site = this.props.site

		const filteredData = _.filter(data, d => d.site === site)

  	return (
			<div>
				<h1> {dataKey} vs testing </h1>
				<div> { filteredData.length } items </div>
    	<BarChart width={150} height={height} data={data}>
         <Bar dataKey={dataKey} fill='#8884d8'/>
       </BarChart>
		 </div>
    );
  }
}

export default class ControlledTinyBarChart extends React.Component {

	constructor(props){
		super(props)

		this.state = {}
		this.state.site = 'zz_elsewhere'
	}


	render(){
		const height = this.props.height
		const dataKey = this.props.dataKey
    const data = this.props.data
		const site = this.state.site

		const handleClick = (event) => {
			console.log('event', event)
			this.setState({site: 'aces'})
		}

		const handleClick1 = (event) => {
			console.log('event', event)
			this.setState({site: 'zz_elsewhere'})
		}

		return <div>
			<div onClick={handleClick}>ACES</div>
			<div onClick={handleClick1}>ELSEWHERE</div>
			<TinyBarChart height={height} dataKey={dataKey} data={data} site={site}/>
		</div>
	}
}
