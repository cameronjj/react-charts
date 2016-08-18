import React from 'react';

import ReadDataAndViz from './obsLength';
import ReadDataAndViz2 from './userLength';
import ReadDataAndViz3 from './commentLength';
import ReadDataAndViz4 from './ideaLength';
import ProcessData from './obsChart';
import ProcessData2 from './commentChart';
import ProcessData3 from './ideaChart';

export default class Summary extends React.Component{
  render(){
    return (
		<div id = "content">
			<div id = 'unit'>
				<h3>NatureNet Activity Summary</h3>
        <div id = 'list'>
          <p>No. Users: <ReadDataAndViz2/></p>
          <p>No. Observations: <ReadDataAndViz/></p>
          <p>No. Comments: <ReadDataAndViz3/></p>
          <p>No. Design Ideas: <ReadDataAndViz4/></p>
        </div>
			</div>
      <div id = 'unit'>
        <h3> Observations Since Launch </h3>
        <ProcessData/>
      </div>
      <div id = 'unit'>
        <h3> Comments Since Launch </h3>
        <ProcessData2/>
      </div>
      <div id = 'unit'>
        <h3> Design Ideas Since Launch </h3>
        <ProcessData3/>
      </div>
	</div>
)}
}
