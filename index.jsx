import React from 'react';
import ReactDOM from 'react-dom';
import TinyBarChart from './chart'

export class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Jumbotron</h1>
				<p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
				<p><a className="btn btn-primary btn-lg">Learn more</a></p>
        <TinyBarChart height={200} dataKey={'uv'}/>
        <TinyBarChart height={200} dataKey={'uv'}/>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
