// sources used:
// - queried chatgpt how to check if item is in a set in js.
// - used the mdn web docs

//uses adjacency list
function depthFirstSearch(g, s, t, v = new Set()) { // g = graph, s = startNode, t = targetNode, v = visited
  if (s == t) { return [s]; }
  if (v.has(s)) { return false; } 

  v.add(s);

  for (var u of g[s]) {
    var path = depthFirstSearch(g, u, t, v);
    if (path) { return [s, ...path]; }
  }
    return false
}
