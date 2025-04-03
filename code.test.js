const fs = require('fs');
  
eval(fs.readFileSync('code.js')+'');

var tests = [
  [
    [ [1], [2], [] ], 0, 2, [0, 1, 2] // simple connection
  ],
  [
    [ [1], [], [3], [] ], 0, 3, [] //no path to target
  ],
  [
    [ [1], [2], [0, 3], [] ], 0, 3, [0, 1, 2, 3] //test cycle in graph
  ],
  [
    [ [1, 2], [3], [3], [4], [] ], 0, 4, [0, 1, 3, 4] // testing when there are multiple paths, but will return the first one it finds
  ],
  [
    [ [1], [2], [0] ], 1, 1, [1] // test target and start being same
  ],
  [
    [ [1], [], [3], [] ], 2, 0, [] // graph without connections
  ],
  [
    [ [1, 2], [3, 4], [5], [6], [7], [], [], [] ], 0, 6, [0, 1, 3, 6] // big graph
  ]
];


function test(g, s, t, o) { // o = expected output
  if (JSON.stringify(depthFirstSearch(g,s,t)) == JSON.stringify(o)) { return true };
  return false
}

for (var i = 0; i < tests.length; i++) {
  var t = tests[i];
  if (!(test(t[0], t[1], t[2], t[3]))) {
    console.error("counterexample, tests index: " + i + " \nTest graph:");
    console.log(t[0]);
    console.log("Start: " + t[1] + ", Target: " + t[2]);
    console.log("Generated path:");
    console.log(depthFirstSearch(t[0], t[1], t[2]));

  }
}
