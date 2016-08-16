import React from 'react';
import ReactDOM from 'react-dom';
import TinyBarChart from './chart'
import TinyBarChartFoo from './chart2'
import { Router, Route, Link, browserHistory } from 'react-router'

// <div>
//   <h1>Jumbotron</h1>
//   <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
//   <p><a className="btn btn-primary btn-lg">Learn more</a></p>
//   <TinyBarChart height={200} dataKey={'uv'}/>
//   <TinyBarChartFoo height={200} dataKey={'uv'}/>
// </div>
// );

class Viz1 extends React.Component{
  render(){
    return <div>Hi Viz 1</div>
  }
}

class Viz2 extends React.Component{
  render(){
    return <div>Hi Viz 2</div>
  }
}

export class App extends React.Component {
	render() {
		return (<Router history={browserHistory}>
    <Route path="viz1" component={Viz1}/>
    <Route path="viz2" component={Viz2}/>
  </Router>)
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
