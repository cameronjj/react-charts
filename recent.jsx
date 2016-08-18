import React from 'react';
import ProcessData from './obsChart2';
import ProcessData2 from './commentChart2';
import ProcessData3 from './ideaChart2';
import ProcessData4 from './obsChart3';
import ProcessData5 from './commentChart3';
import ProcessData6 from './ideaChart3';

export default class Recent extends React.Component{
  render(){
    return (
		<div id = "content">
      <div id = 'unit'>
      <h2>Last Week</h2>
        <h3> Observations </h3>
        <ProcessData4/>
        <h3> Comments </h3>
        <ProcessData5/>
        <h3> Design Ideas</h3>
        <ProcessData6/>
      </div>
      <div id = 'unit'>
      <h2>Last Month</h2>
        <h3> Observations </h3>
        <ProcessData/>
        <h3> Comments </h3>
        <ProcessData2/>
        <h3> Design Ideas</h3>
        <ProcessData3/>
      </div>
	</div>
)}
}
//
// <p>No. Observations: {length(fullDataset, 'observations')}</p>
// <p>No. Comments: {length(fullDataset, 'comments')}</p>
// <p>No. Design Ideas: {length(fullDataset, 'ideas')}</p>
// <h3> Activity Since Launch </h3>
// <StackedBarChart dataset = {overTime2(fullDataset)}/>
