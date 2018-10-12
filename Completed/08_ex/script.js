let input = [1, 2, 0, 4, 3, 0, 5, 0];
let n = input.length;

(function pushZerosToEnd(arr,n){
  let count = 0;

  for(let i = 0; i <arr.length; i++) {
    if(arr[i] != 0) {
      arr[count] = arr[i];
      console.log(arr[i] + " " + count);
      count++;
    } 
  }

  while(count < arr.length) {
    arr[count] = 0;
    count++;
  }
  
  console.log(arr);
})(input);