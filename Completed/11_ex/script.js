let aObj = {
  name: "nameA",
  lastName: "lastName",
  city: "sameCity",
  number: 2
};

let bObj = {
  name: "nameB",
  lastName: "lastName",
  city: "sameCity",
  number: 3
};

console.log((function (objA, objB){
  var difs = {};
  for (const prop in objA) {
    if(objA[prop] !== objB[prop]){
      difs[prop] = `ObjA: ${objA[prop]}, ObjB: ${objB[prop]}`;
    }
  }

  return difs;

})(aObj,bObj));


