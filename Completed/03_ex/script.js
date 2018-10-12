function intersection(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if(arr2.indexOf(arr1[i]) >= 0) {
      newArr.push(arr1[i]);
    }
  }
  
  return newArr;
}

console.dir(intersection([2, 3, 5, 3],[3, 4, 3, 5, 3, 6, 8]));