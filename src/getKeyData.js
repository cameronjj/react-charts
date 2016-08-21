var _ = require('lodash');
var moment = require('moment');

// // Test Data
// var full = require('./full_export.json')
// var observations = full.observations
// var comments = full.comments
// var ideas = full.ideas
// var users = full.users

//merge data with array of empty dates
function mergeData(data, dataKey) {
	var output = {}
	for (var i=0; i < data.length; i++){
		output[dataKey[i]] = data[i]
	}
	return output
}

//change format
function format(input, dataKeys) {
	var output = _.map(input, (d) => {
		var dict = {}
		for(var i=0; i < dataKeys.length; i++){
				dict[dataKeys[i]] = d[dataKeys[i]];
		};
		return dict
		})
	return output
}

//getting the data since July 1st, 2016
function filterSinceLaunch(input, dataKey1, dataKey2) {
	var output = _.filter(input, (d) => {
		var launch = moment("2016-07-01");
		return moment(d[dataKey2]).isAfter(launch);
	})
	return output
}


//return whole shebang
export function processing(observations, comments, ideas, users) {
	var ob = filterSinceLaunch(format(observations, ['id', 'created_at', 'observer', 'site', 'activity']), 'observations', 'created_at')
	var com = filterSinceLaunch(format(comments, ['id', 'created_at', 'commenter']), 'comments', 'created_at')
	var id = filterSinceLaunch(format(ideas, ['id', 'created_at', 'submitter']), 'ideas', 'created_at')
	var us = filterSinceLaunch(format(users, ['affiliation', 'created_at', 'updated_at', 'id', 'display_name']), 'users', 'updated_at')

	var output = mergeData([ob, com, id, us], ["observations", "comments", "ideas", "users"])
	return output
}

 // console.log(processing(observations, comments, ideas, users))
