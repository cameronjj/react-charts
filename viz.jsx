import React from 'react';
import ReactDOM from 'react-dom';

import moment from 'moment'
global.moment = moment

let dataset = require('json!./public/naturenet-export.json')
global.dataset = dataset

// import Recharts from 'recharts'
import {BarChart, Bar, PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import _ from 'lodash'
global._ = _

class StraightAnglePieChart extends React.Component {
	render () {
    const data = this.props.data
  	return (
    	<PieChart width={800} height={400}>
        <Pie startAngle={180} endAngle={0} data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
       </PieChart>
    );
  }
}

class ActivityDistribution extends React.Component {

  constructor(props){
    super(props)

    const input = props.input

    const gs = _.groupBy(input, (d) => { return d.activity_location })
    const data2 = _.map(gs, (g, k) => { return {name: k, value: g.length } } )
    const output =  _.filter(data2, (d,k) => { return _.startsWith(d.name, '-K')})

    this.state = {}
    this.state.output = output

  }

  render(){
    return <StraightAnglePieChart data={this.state.output}/>
  }
}

export default class Viz extends React.Component {
	render() {
		return (
			<div>
        <ActivityDistribution input={dataset}/>
			</div>
		);
	}
}
