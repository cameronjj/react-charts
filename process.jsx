import React from 'react';
import _ from 'lodash'

import TinyBarChart from './tiny'
export default class ProcessData extends React.Component {
  render(){
    let data = this.props.data

    // some data processing before passing it down to the chart component
    let data1 = _.map(data, d => {
      let copy = _.clone(d)
      copy.pv = copy.pv + 100
      return copy
    })

    return <TinyBarChart dataKey={'uv'} height={500} data={data1}/>
  }
}
