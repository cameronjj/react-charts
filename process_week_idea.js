import React from 'react';
import _ from 'lodash';
import moment from 'moment';

//get an array of moments instead of observations
function getMoments(input){
	var output = _.map(input, (d) => {
    return moment(d.created_at); })
	return output
}

//get only observations from last day
function getLastWeek(input){
  var output = _.filter(input, (d) => {
    var lastWeek = moment().subtract(1,'week');
    return d.isAfter(lastWeek); })
  return output
}

// group by hour
function groupByDay(input){
	var output = _.groupBy(input, (d) => {
      var monthDay = d.format("MM-DD");
      return monthDay; })
	return output
}

//get number per month/year
function getCount(input){
	var output = _.mapValues(input, (d) => {
    return _.size(d); })
	return output
}

//creating an empty array of all dates to fill in the missing ones
function generateEmptyTimeArray(input) {
	var dates = []
	var now = moment()
	var first = moment().subtract(1,'week')
	var current = first
	while (current <= now) {
		dates.push (current.format('MM-DD'))
		current.add(1, 'day')
	}

//changing the format
	var output = _.mapValues(_.mapKeys(dates, (d) => {
			return d;}), (d) => {return 0;})

	return output
}

//merge data with array of empty dates
function mergeEmptyWithData(empty, input) {
	var output = _.merge(empty, input)
	return output
}

//change format
function format(input) {
	var output = _.map(input, (d,i) => {
			var dict = { time: i, design_ideas: d }
			return dict;
		})
	return output
}

//return whole shebang
function process(input) {
	var pipeline = _.flow([getMoments, getLastWeek, groupByDay, getCount])
	var pipeline2 = _.flow([getMoments, getLastWeek, generateEmptyTimeArray])
	var pipeline3 = _.flow([mergeEmptyWithData, format])

	var processedData = pipeline(input, 'ideas')
	var empty = pipeline2(input, 'ideas')
	var output = pipeline3(empty, processedData)

	return output
}


import SimpleBarChart from './simpleBar'

export default class ProcessData extends React.Component {
  render(){
    let data = this.props.data

    // some data processing before passing it down to the chart component
    let data1 = process(data)
    return <SimpleBarChart dataKey={'design_ideas'} color = {'#ffc658'} dataset={data1}/>
  }
}
