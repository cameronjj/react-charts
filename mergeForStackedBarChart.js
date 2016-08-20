import {equijoin} from './join';

export function merge (observations, comments, ideas) {
  var first_merge = equijoin(observations, comments, 'time', 'time', function (a,b) {
			return {
				time: b.time,
        observations: a.observations,
        comments: b.comments
			};
		})

var merged = equijoin(first_merge, ideas, 'time', 'time', function (a,b) {
  return {
    time: a.time,
    observations: a.observations,
    comments: a.comments,
    design_ideas: b.design_ideas,
  };
})

return merged
}
