let url1 = 'https://jsonplaceholder.typicode.com/todos/';
let url2 = 'https://jsonplaceholder.typicode.com/comments/';
let url3 ='https://jsonplaceholder.typicode.com/users/'

let promises = [name(url1), name(url2), name(url3)];

async function name(url) {
  let response = await fetch(url);
  let json = await response.json();

  return json;
}

function callback (data) {
  for(let a in data) {
    console.log(data[a]);
  }
}
function setup(arr, callback) {
  Promise.all(arr)
  .then(callback)
  .catch(err => console.log(err));
}

setup(promises, callback);