var _ = require('lodash')
//var input = require('./full_export.json')
//var dataKey = 'observations'
// var expectedOutput = require('./step2_projected.json')

//This function uses map to get particular pieces of data
//Remove gets rid of the observations with a null date
function process(input, dataKey){
	var output = _.size(input[dataKey])
	return output
}

//console.log(process(input, dataKey))
// var output = process(input)

// var checkIfItIsCorrect = _.isEqual(output, expectedOutput)

// console.log(checkIfItIsCorrect)

module.exports = process
