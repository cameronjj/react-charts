import React from 'react';
import {BarChart, Bar, PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'


class StraightAnglePieChart extends React.Component {
	render () {
    const data = this.props.data
  	return (
    	<PieChart width={800} height={400}>
        <Pie startAngle={180} endAngle={0} data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
       </PieChart>
    )
  }
}





import Slider from 'material-ui/Slider';

export default class ControlledPieChart extends React.Component {

	constructor(props){
		super(props)
		this.state = {}
		this.sliderValue = 1
	}


  render(){
    const data = this.props.data

		const sliderValue = this.state.sliderValue

		const handleSlider = (event, value) => {
			console.log('value is', value)	// value is between 0 and 1
			this.setState({sliderValue: value})
		}

    return <div>
			<Slider defaultValue={sliderValue} onChange={handleSlider}/>
			<div> sliderValue is {sliderValue}</div>
      <StraightAnglePieChart data={data}/>
    </div>
  }
}
