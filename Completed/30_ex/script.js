window.onload = (function () {

  let pList = document.getElementsByTagName('p');

  let arr = toArray(pList);

  for (let a in arr) {
    pList[a].id = a;

  }

  for (let a in arr) {
    if (pList[a].id % 2 != 0) {
      pList[a].style.visibility = 'hidden';
    }
  }

  window.addEventListener('click', (e) => {
    if (e.target.id) {
      let element = parseInt(e.target.id);
      if (element % 2 == 0) {
        let nextElement = document.getElementById(element + 1);
        if (nextElement.style.visibility == 'hidden') {
          nextElement.style.visibility = 'visible';
        } else nextElement.style.visibility = 'hidden';
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