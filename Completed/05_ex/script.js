Array.prototype.duplicate = function duplicate () {
  let newArr = [];
  newArr.push(...this);
  newArr.push(...this);

  console.log(newArr);
};

[1,2,3,4].duplicate();