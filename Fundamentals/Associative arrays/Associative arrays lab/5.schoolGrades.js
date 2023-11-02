function schoolGrades(info) {
  let students = {};

  for (let current of info) {
    let [name, ...grades] = current.split(" ");

    let num = grades.reduce((grd, currVal) => Number(grd) + Number(currVal), 0);

    if (students.hasOwnProperty(name)) {
      num += grades.reduce((grd, currVal) => Number(grd) + Number(currVal), 0);
      grades.push(num);
    }

    average = num / grades.length;
    students[name] = average;
  }

  console.log(students);
}

schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
