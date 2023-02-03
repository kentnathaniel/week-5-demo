class Employee {
  constructor(firstName) {
    this.firstName = firstName;
  }

  sayGoodMorning() {
    console.info(`Good morning ${this.firstName}`);
  }
}

class Manager extends Employee {
  constructor(firstName, lastName) {
    super(firstName);
    this.lastName = lastName;
  }
}

const vincent = new Employee("Vincent");
vincent.sayGoodMorning();

const pevita = new Manager("Pevita", "Pearce");
pevita.sayGoodMorning();

console.info(vincent);
console.info(pevita);
