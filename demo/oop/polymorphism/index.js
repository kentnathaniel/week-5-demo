class Employee {
  constructor(firstName) {
    this.firstName = firstName;
  }

  sayGoodMorning() {
    console.info(`Good morning ${this.firstName}`);
  }

  sayHello(name) {
    console.info(`Hello ${name}, my name is employee ${this.firstName}`);
  }
}

class Manager extends Employee {
  constructor(firstName, lastName) {
    super(firstName);
    this.lastName = lastName;
  }

  sayHello(name) {
    console.info(`Hello ${name}, my name is manager ${this.firstName} ${this.lastName}`);
  }
}

const vincent = new Employee("Vincent");
vincent.sayHello("Ridho");

const pevita = new Manager("Pevita", "Pearce");
pevita.sayHello("Ridho");

console.info(vincent);
console.info(pevita);
