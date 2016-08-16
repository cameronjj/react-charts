import React from 'react';
import ReactDOM from 'react-dom';

import Viz from './viz'
export class App extends React.Component {
	render() {
		return (
			<Viz/>
		)
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
