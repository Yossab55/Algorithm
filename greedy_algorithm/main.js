function greedy_algorithm() {
let states_needed = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);
let stations = {
  'kone' : new Set(['id', 'nv', 'ut']),
  'ktwo' : new Set(['id', 'nv', 'mt']),
  'kthree' : new Set(['or', 'nv', 'wa']),
  'kfour' : new Set(['ut', 'nv']),
  'kfive' : new Set(['az', 'ca'])
}
  let final_station = new Set();
  while(states_needed) {
    let best_station = null;
    let states_covered = new Set();

    for(let [station, states] of Object.entries(stations)) {
      let covered = intersect(states, states_needed);
      if(covered.size > states_covered.size) {
        best_station = station;
        states_covered = covered;
      }
    }
    states_needed = subtract(states_covered, states_needed);
    final_station.add(best_station)
  }
  console.log(final_station)
}
function intersect(subset, list) {
  let result = new Set();
  for(let state of subset) {
    if(list.has(state)) result.add(state);
  }
  return result
}
function subtract(subset, list) {
  let result = new Set();
  for(let state of list) {
    if(! subset.has(state)) result.add(state);
  }
  return result.size ? result : null;
}
greedy_algorithm();

