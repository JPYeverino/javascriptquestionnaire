
Date.prototype.weekAfter = function weekAfter() {
  
  let monthDays = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ];

  let month = this.getMonth();
  let date = this.getDate();
  let newDate = date + 1;
  if(newDate > monthDays[month]) {
    newDate = newDate - monthDays[month];
    this.setDate(newDate);
    this.setMonth(this.getMonth() + 1);
    return this;
  } else {
    this.setDate(newDate);
    return this;
  }
  
}

d = new Date(2018, 0, 31);
console.log(d);
console.log(d.weekAfter());

