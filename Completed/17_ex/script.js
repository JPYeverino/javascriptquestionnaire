var candidate = {
  name: {
    firstname: 'John',
    lastname: 'Galt',
    phone: '123-456-7890'
  }
}

candidate.printName = function () {
  return `${this.name.firstname} ${this.name.lastname}`;
};


var div2 = document.getElementsByClassName("info");
var divName = div2[1].getElementsByTagName("div")[0];
var divFullName = div2[1].getElementsByTagName("div")[1];

divName.innerText = candidate.name.firstname;
divFullName.innerText = candidate.printName();
