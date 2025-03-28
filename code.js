//uses adjacency list
function depthFirstSearch(g, s, t) { // g = graph, s = startNode, t = targetNode
  process.stdout.write("graph=");
  console.log(g);
  console.log("startNode=" + s);

  if (s == t) { return ; }
  if (g[s].length == 0) { return false; }

  var gRest = JSON.parse(JSON.stringify(g));
  gRest[s] = []
  process.stdout.write("gRest=");
  console.log(gRest);
  var path = depthFirstSearch(gRest, g[s][0], t)
  process.stdout.write("path=");
  console.log(path);

  if (path == false) {
    return depthFirstSearch(g, g[s].splice[0,0]);
  }
  else {
    return path.unshift(s) ; //needs something different 
  }
}


var testGraph = [
  [1,2,5],
  [4],
  [3,5],
  [4],
  [],
  [6],
  []
];
console.log(testGraph);

console.log(depthFirstSearch(testGraph, 0, 6)); //expected output is: [0,5,6]
