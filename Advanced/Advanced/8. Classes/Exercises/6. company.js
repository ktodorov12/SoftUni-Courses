class Company {
  department = {};

  addEmployee(name, salary, position, dep) {
    if (!name || !salary || !position || !dep) {
      throw new Error("Invalid input!");
    }

    salary = Number(salary);

    if (salary < 0) {
      throw new Error("Invalid input!");
    }

    let currDep = this.department;
    if (!currDep.hasOwnProperty(dep)) {
      currDep[dep] = {
        workers: [],
        avg: 0,
      };
    }

    let employee = { name, salary, position };
    currDep[dep].workers.push(employee);

    const total = currDep[dep].workers.reduce((a, b) => a + b.salary, 0);
    currDep[dep].avg = total / currDep[dep].workers.length;

    currDep[dep].workers.sort(
      (a, b) => b.salary - a.salary || a.name.localeCompare(b.name)
    );

    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    const best = Object.entries(this.department).sort((a, b) => b.avg - a.avg);

    const name = best[0][0];
    const { workers, avg } = best[0][1];

    let result = [
      `Best Department is: ${name}`,
      `Average salary: ${avg.toFixed(2)}`,
    ];

    for (let { name, salary, position } of workers) {
      let buffer = `${name} ${salary} ${position}`;
      result.push(buffer);
    }

    return result.join("\n");
  }
}

let c = new Company();

c.addEmployee("", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 0, "HR", "Human resources");

console.log(c.bestDepartment());
