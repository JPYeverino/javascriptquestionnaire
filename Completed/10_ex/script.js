class Person  {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  toString () {
    return `His/her name is ${this.name} ${this.lastName}`;
  }
}

class Medic extends Person {
  constructor(name, lastName, specialty) {
    super(name, lastName);
    this.specialty = specialty;
  }
}

