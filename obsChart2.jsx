import React from 'react';
import ProcessData from './process_month_obs';

import axios from 'axios';

export default class ReadDataAndViz extends React.Component {

  constructor(props){
    super(props)
    this.state = {}
    this.state.data = null
    console.log('test');
  }

  componentDidMount(){
    axios.get('https://naturenet.firebaseio.com/observations.json')
      .then((response) => {
        console.log(response.data);
        this.setState({data: response.data})
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render(){
    const data = this.state.data

    if (data === null){
      return <div>Loading...</div>
    } else {
      return <ProcessData data = {data}/>
    }
  }
}
