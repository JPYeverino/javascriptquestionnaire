(function series() {
  let months = [
    "January",
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  let input = "January February March January February March";

  let arr = input.split(" ");

  let difference = 0;
  let count = 0;

  for (let i = 1; i < arr.length; i++) {
    difference = months.indexOf(arr[i]) - months.indexOf(arr[i - 1]);
    if (difference > 0) {
      count++;
    } else { break; }
  }

  let newArr = [];
  let serie = true;

  for (let j = 0; j <= count; j++) {
    newArr.push(months[j]);
  }

  let nextSeries = [];

  for (let l = count + 1; l < arr.length; l++) {
    nextSeries.push(arr[l]);
  }

  for (let i = 0; i < nextSeries.length; i++) {
    if (nextSeries[i] !== newArr[i]) {
      console.log(nextSeries[i] + " " + newArr[i]);
      serie = false;
    }
  }

  Array.prototype.duplicate = function duplicate() {
    let newArr = [];
    newArr.push(...this);
    newArr.push(...this);

    return newArr;
  };

  if (serie) {
    newArr.push(months[months.indexOf(newArr[newArr.length - 1]) + 1]);
    console.log(newArr.duplicate());
  }

})();