var _ = require('lodash')
var moment = require('moment')
//var input = require('json!./full_export.json')
//var input = require('./full_export.json')
//var dataKey = 'observations'
//var site = 'zz_elsewhere'


//filter by sites
function filterBySite(input, dataKey, site){
	var output = _.filter(input[dataKey], (d) => {
		if (d.site == site){
			return d;}
	})
	return output
}

//var output = filterBySite(input, dataKey, site)
//console.log(JSON.stringify(output,null,' '))
/*var _ = require('lodash')
var moment = require('moment')
//var input = require('json!./full_export.json')
var input = require('./full_export.json')
var dataKey = 'observations'
var site = 'rcnc'


//filter by sites
function filterBySite(input, dataKey, site){
	var output = _.filter(input[dataKey], (d) => {
		if (d.site == site){
			return d;}
	})
	return output
}

var output = filterBySite(input, dataKey, site)
console.log(JSON.stringify(output,null,' '))
/*
//return whole shebang
function process(input, dataKey) {
	var pipeline = _.flow([getMoments, getLastDay, groupByHour, getCount])
	var pipeline2 = _.flow([getMoments, getLastDay, generateEmptyTimeArray])
	var pipeline3 = _.flow([mergeEmptyWithData, format])

	var processedData = pipeline(input, dataKey)
	var empty = pipeline2(input, dataKey)
	var output = pipeline3(empty, processedData)

	return output
}
*/


module.exports = filterBySite

//return whole shebang
function process(input, dataKey) {
	var pipeline = _.flow([getMoments, getLastDay, groupByHour, getCount])
	var pipeline2 = _.flow([getMoments, getLastDay, generateEmptyTimeArray])
	var pipeline3 = _.flow([mergeEmptyWithData, format])

	var processedData = pipeline(input, dataKey)
	var empty = pipeline2(input, dataKey)
	var output = pipeline3(empty, processedData)

	return output
}
*/


module.exports = filterBySite
