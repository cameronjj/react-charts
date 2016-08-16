import React from 'react';
import ReactDOM from 'react-dom';

import LoadAndViz from './LoadAndViz'
export class App extends React.Component {
	render() {
		return (
			<LoadAndViz/>
		)
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
