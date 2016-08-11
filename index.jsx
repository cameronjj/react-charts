import React from 'react';
import ReactDOM from 'react-dom';

import moment from 'moment'
global.moment = moment

let fullDataset = require('json!./lib/full_export.json')
var length = require('./lib/length.js')
var overTime = require('./lib/overTime.js')
var lastMonth = require('./lib/lastMonth.js')

global.dataset = fullDataset
// import Recharts from 'recharts';
import {BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];


import _ from 'lodash'
global.data = data
global._ = _

class SimpleLineChart extends React.Component {
	render () {
  	return (
    	<LineChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    );
  }
}

class TinyBarChart extends React.Component{
	render () {
		const height = this.props.height
		const dataKey = this.props.dataKey
  	return (
			<div>
				<h1> {dataKey} vs testing </h1>
    	<BarChart width={150} height={height} data={data}>
         <Bar dataKey={dataKey} fill='#8884d8'/>
       </BarChart>
		 </div>
    );
  }
}


const SimpleBarChart = React.createClass({
	render () {
    const dataset = this.props.dataset
    const color = this.props.color
  	return (
    	<BarChart width={600} height={300} data={dataset}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey = "time"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Bar dataKey = "count" fill={color} />
      </BarChart>
    );
  }
})

let gs = 1020

export class App extends React.Component {
	render() {
		return (
			<div>
				<h1>NatureNet Data</h1>
        <p>Need to add in a nav bar and formatting...</p>
        <h2>NatureNet Activity Summary</h2>
        <p>No. Users: {length(fullDataset, 'users')}</p>
        <p>No. Observations: {length(fullDataset, 'observations')}</p>
        <p>No. Comments: {length(fullDataset, 'comments')}</p>
        <p>No. Design Ideas: {length(fullDataset, 'ideas')}</p>
        <h3> Observations Since Launch </h3>
        <SimpleBarChart dataset = {overTime(fullDataset, 'observations')} color = {"#82ca9d"}/>
        <h3> Comments Since Launch </h3>
        <SimpleBarChart dataset = {overTime(fullDataset, 'comments')} color = {"#8884d8"}/>
        <h3> Design Ideas Since Launch </h3>
        <SimpleBarChart dataset = {overTime(fullDataset, 'ideas')} color = {"#ffc658"}/>
        <h2>NatureNet Activity Last Month</h2>
        <h3> Observations Last Month </h3>
        <SimpleBarChart dataset = {lastMonth(fullDataset, 'observations')} color = {"#82ca9d"}/>
        <h3> Comments Last Month </h3>
        <SimpleBarChart dataset = {lastMonth(fullDataset, 'comments')} color = {"#8884d8"}/>
        <h3> Design Ideas Last Month </h3>
        <SimpleBarChart dataset = {lastMonth(fullDataset, 'ideas')} color = {"#ffc658"}/>
      </div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
