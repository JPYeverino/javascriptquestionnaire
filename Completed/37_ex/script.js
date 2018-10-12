String.prototype.exclamation = function exclamation() {
  return `${this}!`
}

let add = (...arguments) => arguments.reduce((total, element) => total + element) ;
