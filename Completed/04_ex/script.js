function flat(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      newArr.push(arr[i]);
    } else {
      console.log(...arr[i]);
      newArr.push(...flat(arr[i]));
    }
  }
  return newArr;
}


console.log(flat([1,2,3,[4,5,[6,7]], 8,9]));