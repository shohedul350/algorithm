let graph;
const nodes = 5;

const createGraph =(nodes)=>{
  graph = new Array(nodes);
  for(let i = 0; i< graph.length; i ++){
    graph[i]=  new Array(nodes);
  }
  for ( let i = 0; i <graph.length; i++){
    for (let j= 0; j< graph[i].length; j++){
      graph[i][j]=0
    }
  }
}

const addEdge= (a,b)=>{
  for(let i = 0;  i< graph.length; i++){
    for(let j = 0; j< graph[i].length;j++){
         if(i===a && j === b){
          graph[i][j] = 1;
           graph[j][i] = 1;
         }
    }
  }
}

createGraph(nodes);
addEdge(0, 1);
addEdge(0, 2);
addEdge(0, 3);
addEdge(1, 0);
addEdge(1, 4);
addEdge(2, 0);
addEdge(2, 4);
addEdge(3, 0);
addEdge(3, 4);

let visited = new Array(5);
console.log(visited);
const dfs = (node)=>{
  const queue = [];

  for(let i =0; i<visited.length; i++){
    visited[i] = false;
  }

visited[node] = true;
queue.push(node);

while (queue.length) {
  let currentNode = queue.shift();
  console.log(`visiting ${currentNode}`);

  for(let j = 0; j< graph[currentNode].length; j++){

    if(graph[currentNode][j] === 1 && visited[j] === false){
      visited[j] = true;
      queue.push(j)
    }
  }

}


}

dfs(0);