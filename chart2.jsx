import React from 'react';
import ReactDOM from 'react-dom';
import {BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

export default class TinyBarChart extends React.Component{
	render () {
		const height = this.props.height
		const dataKey = this.props.dataKey
  	return (
			<div>
        This is another chart
				<h1> {dataKey} vs testing </h1>
    	<BarChart width={150} height={height} data={data}>
         <Bar dataKey={dataKey} fill='#8884d8'/>
       </BarChart>
		 </div>
    );
  }
}
