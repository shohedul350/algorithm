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

const printGraph = () => {
  let graphline = " ";
  let i, j;
  for (i = 0; i < graphAdj.length; i++) {
     for (j = 0; j < graphAdj[i].length; j++) {
         graphline += graphAdj[i][j];
         graphline += " "
         if (j == graphAdj.length - 1) {
            console.log(graphline);
            graphline = ' ';
         }
     }
   }
}
