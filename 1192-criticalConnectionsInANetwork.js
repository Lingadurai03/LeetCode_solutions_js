// 1192. Critical Connections in a Network
// Solved
// Hard
// Topics
// Companies
// Hint
// YouTube
// There are n servers numbered from 0 to n - 1 connected by undirected server-to-server connections forming a network where connections[i] = [ai, bi] represents a connection between servers ai and bi. Any server can reach other servers directly or indirectly through the network.

// A critical connection is a connection that, if removed, will make some servers unable to reach some other server.

// Return all critical connections in the network in any order.

// Example 1:

// Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
// Output: [[1,3]]
// Explanation: [[3,1]] is also accepted.
// Example 2:

// Input: n = 2, connections = [[0,1]]
// Output: [[0,1]]

// Constraints:

// 2 <= n <= 105
// n - 1 <= connections.length <= 105
// 0 <= ai, bi <= n - 1
// ai != bi
// There are no repeated connections.

var criticalConnections = function (n, connections) {
  let adj = Array.from({ length: n }, () => []);

  for (let [u, v] of connections) {
    adj[u].push(v);
    adj[v].push(u);
  }

  let dTime = Array(n).fill(-1);
  let low = Array(n).fill(-1);
  let time = 0;
  let ans = [];

  function dfs(u, p) {
    dTime[u] = low[u] = time++;
    for (let v of adj[u]) {
      if (v == p) continue;

      if (dTime[v] == -1) {
        dfs(v, u);
        low[u] = Math.min(low[u], low[v]);
        if (low[v] > dTime[u]) {
          ans.push([u, v]);
        }
      } else {
        low[u] = Math.min(low[u], dTime[v]);
      }
    }
  }
  dfs(0, -1);
  return ans;
};
