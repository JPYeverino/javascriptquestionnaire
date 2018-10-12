function myPowerFn(n) {
  this.n = n
  return function(p){
    return Math.pow(n,p);
  }
}