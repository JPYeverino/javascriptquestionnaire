
function weekAfter(dateObj) {
  
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

  let month = dateObj.getMonth();
  let date = dateObj.getDate();
  let newDate = date + 7;
  if(newDate > monthDays[month]) {
    newDate = newDate - monthDays[month];
    dateObj.setDate(newDate);
    dateObj.setMonth(dateObj.getMonth() + 1);
  } else {
    dateObj.setDate(newDate);
  }
  
}

d = new Date();
console.log(d);
weekAfter(d);
console.log(d);

