function solve() {
  class Employee {
    salary = 0;
    dividend = 0;
    tasks = [];

    constructor(name, age) {
      this.name = name;
      this.age = Number(age);
    }

    work() {
      if (this.tasks.length > 0) {
        let first = this.tasks.shift();

        console.log(`${this.name} ${first}`);
        this.tasks.push(first);
      }
    }

    collectSalary() {
      let total = this.salary + this.dividend;
      console.log(`${this.name} received ${total} this month.`);
    }
  }

  class Junior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks = ["is working on a simple task."];
    }
  }

  class Senior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks = [
        "is working on a complicated task.",
        "is taking time off work.",
        "is supervising junior workers.",
      ];
    }
  }

  class Manager extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks = ["scheduled a meeting.", "is preparing a quarterly report."];
    }
  }

  return {
    Employee,
    Junior,
    Senior,
    Manager,
  };
}

const classes = solve();

const junior = new classes.Junior("Ivan", 25);
junior.work();
junior.work();
junior.salary = 5811;
junior.collectSalary();

const sinior = new classes.Senior("Alex", 31);
sinior.work();
sinior.work();
sinior.work();
sinior.work();
sinior.salary = 12050;
sinior.collectSalary();

const manager = new classes.Manager("Tom", 55);
manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();
