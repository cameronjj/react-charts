import React from 'react';
import _ from 'lodash';
import moment from 'moment';

function process(input){
	var output = _.size(input)
	return output
}

export default class ProcessData extends React.Component {
  render(){
    let data = this.props.data

    // some data processing before passing it down to the chart component
    let data1 = process(data)
		console.log(data1)
    return <span> {data1} </span>
  }
}
