class Employee {
  constructor(age, baseSalary) {
    this.age = age;
    this.baseSalary = baseSalary;
  }

  getWage() {
    const bonus = 100;
    const tax = 0.05; //5% tax

    return (bonus * this.age + this.baseSalary) * (1 - tax);
  }
}

const ridho = new Employee(23, 5000, "id");

console.log(ridho.getWage());
