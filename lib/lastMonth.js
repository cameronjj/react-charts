var _ = require('lodash')
var moment = require('moment')
//var input = require('json!./full_export.json')
//var input = require('./full_export.json')
//var dataKey = 'observations'

//get an array of moments instead of observations
function getMoments(input, dataKey){
	var output = _.map(input[dataKey], (d) => {
    return moment(d.created_at); })
	return output
}

//get only observations from last day
function getLastMonth(input){
  var output = _.filter(input, (d) => {
    var lastMonth = moment().subtract(1,'month');
    return d.isAfter(lastMonth); })
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
	var first = moment().subtract(1,'month')
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
			var dict = { time: i, count: d }
			return dict;
		})
	return output
}

//return whole shebang
function process(input, dataKey) {
	var pipeline = _.flow([getMoments, getLastMonth, groupByDay, getCount])
	var pipeline2 = _.flow([getMoments, getLastMonth, generateEmptyTimeArray])
	var pipeline3 = _.flow([mergeEmptyWithData, format])

	var processedData = pipeline(input, dataKey)
	var empty = pipeline2(input, dataKey)
	var output = pipeline3(empty, processedData)

	return output
}

//var output = process(input, dataKey)
//console.log(JSON.stringify(output,null,' '))

module.exports = process
