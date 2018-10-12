let tables = document.getElementsByTagName('table');
let table = tables[0];
table.id = "table";

let rows = table.getElementsByTagName('tr');
let rowsArr = Array.from(rows);

console.log(`Ages at beginning`);
for (const iterator of rowsArr) {
  console.log(getAge(iterator));
}
rowsArr.sort(orderByAge);

console.log(`Ages at finish`);
for (const iterator of rowsArr) {
  console.log(getAge(iterator));
}

function orderByAge(curr, next) {
  let ageCurrent = getAge(curr);
  let ageNext = getAge(next);

  if(ageCurrent < 0) return 0;
  if(ageNext < 0) return 0;

  return ageCurrent - ageNext;
}

function getAge(htmlElem) {
  let age = parseInt(htmlElem.children[1].innerText);
  if(!isNaN(age)) {
    return age;
  }
  return -1;
}

while(table.firstChild) {
  table.removeChild(table.firstChild)
}

for (const iterator of rowsArr) {
  table.appendChild(iterator);
}






