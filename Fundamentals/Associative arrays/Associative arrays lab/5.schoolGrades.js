function schoolGrades(info) {
  let students = {};

  for (let current of info) {
    let [name, ...grades] = current.split(" ");

    if (students.hasOwnProperty(name)) {
      students[name] = students[name].concat(grades);
    } else {
      students[name] = grades;
    }
  }

  let entries = Object.entries(students);
  let sorted = entries.sort((a,b) => a[0].localeCompare(b[0]))

  for (let [name, grades] of sorted) {
    let total = grades.reduce((x, y) => Number(x) + Number(y), 0);
    let average = total / grades.length;
    console.log(`${name}: ${average.toFixed(2)}`);
  }
}

schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
