const fs = require('fs');
  
eval(fs.readFileSync('code.js')+'');

var tests = [
  [
    [[],[]], 0, 1, false
  ],
  [
    [[1], [2], [3], [5], [], [4] ], 0, 4, [0, 1, 2, 3, 5, 4]
  ],
  [
    [[1], [2, 4], [3], [5], [], [] ], 0, 4, [0, 1, 4]
  ],
  [
    [[1], [2], [3], [4], [5], [6], [7], [1, 3, 5], [] ], 0, 9, false
  ],
  [
    [[1, 2, 3, 4, 5, 8], [0,2,3,4,5], [0,1,3,4,5], [0,1,2,4,5], [], [6], [7],[9] , [] ], 0, 9, [0,8,9]
  ]
];


function test(g, s, t, o) { // o = expected output
  if (JSON.stringify(depthFirstSearch(g,s,t)) == JSON.stringify(o)) { return true };
  return false
}

for (var i = 0; i < tests.length; i++) {
  var t = tests[0];
  if (!(test(t[0], t[1], t[2], t[3]))) {
    console.error("counterexample: " + t);
  }
}
