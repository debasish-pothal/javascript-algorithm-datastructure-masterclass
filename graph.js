class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (!this.adjacencyList[v]) {
      this.adjacencyList[v] = [];
    }
  }

  removeVertex(v) {
    this.adjacencyList[v].forEach((tempV) => {
      this.removeEdge(v, tempV);
    });

    delete this.adjacencyList[v];
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1]) {
      this.addVertex(v1);
    }

    if (!this.adjacencyList[v2]) {
      this.addVertex(v2);
    }

    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  dfs(v) {
    const result = [];
    const visited = {};

    const helper = (vertex) => {
      if (!vertex) {
        return null;
      }

      visited[vertex] = true;
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          helper(neighbour);
        }
      });
    };

    helper(v);

    return result;
  }
}

const g = new Graph();

console.log(g);
