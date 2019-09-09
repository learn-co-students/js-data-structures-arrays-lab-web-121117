function map(arr, callback){
  let newArray = []
  for(let i = 0; i < arr.length; i++){
    newArray.push(callback(arr[i]));
  }
  return newArray;
}

function reduce(arr, callback, accumulator){
  for(let i = 0; i < arr.length; i++){
    accumulator = callback(accumulator, arr[i]);
  }
  return accumulator;
}
