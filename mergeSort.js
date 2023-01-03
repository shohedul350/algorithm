const merge =(left, right)=>{
  let arr = []
  while (left.length && right.length) {
      if (left[0] < right[0]) {
          arr.push(left.shift())  
      } else {
          arr.push(right.shift()) 
      }
  }
  return [ ...arr, ...left, ...right ]
}
const mergeSort =(array)=>{
  const mid = array.length / 2
  if(array.length < 2){
    return array 
  }
  const left = array.splice(0, mid)
  return merge(mergeSort(left),mergeSort(array))
}

const array = [4, 8, 7, 2, 11, 1, 3];
console.log(mergeSort(array));