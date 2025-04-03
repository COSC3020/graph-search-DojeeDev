// sources used:
// - queried chatgpt how to check if item is in a set in js.
// - used the mdn web docs

//uses adjacency list
function depthFirstSearch(g, s, t, v = new Set()) { // g = graph, s = startNode, t = targetNode, v = visited
  if (s == t) { return [t]; }
  if (v.has(s)) { return []; } 

  v.add(s);

  for (var u = 0; u < g[s].length; u++) {
    const path = depthFirstSearch(g, g[s][u], t, v);
    if (path.length > 0) { return [s, ...path]; }
  }
    return [];
}
