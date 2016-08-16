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

// class Viz1 extends React.Component{
//   render(){
//     return <div>Hi Viz 1</div>
//   }
// }


class MyIndex extends React.Component {
  render(){
    return (<div>
      MyIndex
      <div>header</div>
      <ul>
        <li><Link to='/viz1'>Go to viz1</Link></li>
        <li><Link to='/viz2'>Go to viz2</Link></li>
      </ul>
      { this.props.children }
      <div>Footer</div>
    </div>)
  }
}

import Viz1 from './viz1'

class Viz2 extends React.Component{
  render(){
    return <div>Hi Viz 2</div>
  }
}

export class App extends React.Component {
	render() {
		return (<Router history={browserHistory}>
      <Route path="/" component={MyIndex}>
        <Route path="viz1" component={Viz1}/>
        <Route path="viz2" component={Viz2}/>
      </Route>
  </Router>)
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
