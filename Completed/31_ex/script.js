window.onload = (function () {

  let pList = document.getElementsByTagName('p');

  let arr = toArray(pList);

  for (let a in arr) {
    pList[a].id = a;

  }

  for (let a in arr) {
      pList[a].style.opacity = 1;
  }

  window.addEventListener('click', (e) => {
    if (e.target.id) {
      for(let a in arr) {
        if(a != e.target.id) {
          document.getElementById(a).style.opacity = 0;
        } else document.getElementById(a).style.opacity = 1;
      }
    }
  });

});


function toArray(obj) {
  var array = [];
  // iterate backwards ensuring that length is an UInt32
  for (var i = obj.length >>> 0; i--;) {
    array[i] = obj[i];
  }
  return array;
}