import React from 'react';

import moment from 'moment'
global.moment = moment

import _ from 'lodash'
global._ = _

import ControlledPieChart from './piechart'

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
    return <ControlledPieChart data={this.state.output}/>
  }
}

export default class Viz extends React.Component {
	render() {
    const dataset = this.props.dataset
		return (
			<div>
        <ActivityDistribution input={dataset}/>
			</div>
		);
	}
}
