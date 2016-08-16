import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

import LoadAndViz from './LoadAndViz'
import LoadAndViz2 from './LoadAndViz2'

class CommonLayout extends React.Component {
  render(){
    return <div>
      <div>This is a cool NN header</div>
      <div>some links
        <ul>
          <li><Link to='viz1'>First Viz</Link></li>
          <li><Link to='viz2'>Second Viz</Link></li>
        </ul>
      </div>
      { this.props.children }
      <div>This is a cool NN footer</div>
    </div>
  }
}

export class App extends React.Component {
	render() {
		return (
      <Router history={browserHistory}>
      <Route path="/" component={CommonLayout}>
        <Route path="viz1" component={LoadAndViz}/>
        <Route path="viz2" component={LoadAndViz2}/>
      </Route>
    </Router>
		)
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
