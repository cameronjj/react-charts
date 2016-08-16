import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

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
       <MuiThemeProvider>
        <Router history={browserHistory}>
          <Route path="/" component={CommonLayout}>
            <Route path="viz1" component={LoadAndViz}/>
            <Route path="viz2" component={LoadAndViz2}/>
          </Route>
        </Router>
      </MuiThemeProvider>
		)
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
