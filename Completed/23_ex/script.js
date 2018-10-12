let sequence = function (max) {
  let prime;
  let residue;

  function isPrime(input) {
    let prime = true;
    for (let i = 2; i <= Math.sqrt(input); i++) {
      if (input % i == 0) {
        prime = false;
        break;
      }
    }
    return prime && (input > 1);
  }

  if (!isPrime(max)) {
    prime = max - 1;
    for (let x = max; x >= 0; x--) {

      if (x > prime) {
        console.log(x)
      } else {
        residue = (x * x) % prime;
        console.log(x <= (prime / 2) ? residue : prime - residue);
      }
    }
  } else {
    for (let x = max; x >= 0; x--) {
      residue = (x * x) % max;
      console.log(x <= (max / 2) ? residue : max - residue);
    }
  }
}

sequence(116);