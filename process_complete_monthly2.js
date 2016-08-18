import React from 'react';
import _ from 'lodash';
import moment from 'moment';

//var input = require('./full_export.json')

//get an array of moments instead of observations
function getMoments(input){
	var output = _.map(input, (d) => {
    return moment(d.created_at); })
	return output
}

// group by month & year
function groupByMonth(input){
	var output = _.groupBy(input, (d) => {
			var yearMonth = d.format("YYYY-MM")
      return yearMonth; })
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
	var first = moment.min(input)
	var current = first
	while (current <= now) {
		dates.push (current.format('YYYY-MM'))
		current.add(1, 'month')
	}
//changing the format
	var output = _.mapValues(_.mapKeys(dates, (d) => {
			return d;}), (d) => {return 0;})

	return output
}

//merge data with array of empty dates
function mergeData(empty,input) {
	var output = _.merge(empty, input)
	return output
}

//change format
function formatIdeas(input) {
	var output = _.map(input, (d,i) => {
			var dict = { time: i, design_ideas: d }
			return dict;
		})
	return output
}

// //change format
// function formatComments(input) {
// 	var output = _.map(input, (d,i) => {
// 			var dict = { time: i, comments: d }
// 			return dict;
// 		})
// 	return output
// }
//
// //change format
// function formatIdeas(input) {
// 	var output = _.map(input, (d,i) => {
// 			var dict = { time: i, design_ideas: d }
// 			return dict;
// 		})
// 	return output
// }

//return whole shebang
function process(input) {
	var pipeline = _.flow([getMoments, groupByMonth, getCount])
	var pipelineEmpty = _.flow([getMoments, generateEmptyTimeArray])
	var pipelineObs = _.flow([mergeData, formatIdeas])
	// var pipelineCom = _.flow([mergeData, formatComments])
//	var pipelineIdea = _.flow([mergeData, formatIdeas])

	var processedObs = pipeline(input, "ideas")
	// var processedCom = pipeline(input, "comments")
	// var processedIdea = pipeline(input, "ideas")
	var empty = pipelineEmpty(input, "ideas")
	// var empty2 = pipelineEmpty(input, "observations")
	// var empty3 = pipelineEmpty(input, "observations")
	var output = pipelineObs(empty, processedObs)
	// var outputCom = pipelineCom(empty2, processedCom)
	// var outputIdea = pipelineIdea(empty3, processedIdea)

	// var output = _.merge(_.merge(outputObs, outputCom), outputIdea)

	return output
}


import SimpleBarChart from './simpleBar'

export default class ProcessData extends React.Component {
  render(){
    let data = this.props.data

    // some data processing before passing it down to the chart component
    let data1 = process(data)
		console.log(data1)
    return <SimpleBarChart dataKey={'design_ideas'} color = {'#ffc658'} dataset={data1}/>
  }
}
