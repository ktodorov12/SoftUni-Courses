function schoolRegister(info) {
  let patternName = /: [A-Z][a-z]+/;
  let register = {};

  for (let student of info) {
    let match = student.match(patternName)[0];

    let name = match.split(": ")[1];
    let grade = student.match(/\d+/)[0];
    let averageScore = student.match(/\d+\.\d+/)[0];

    if (averageScore > 3) {
      grade++;
    } else {
      continue;
    }

    if (!register.hasOwnProperty(grade)) {
      register[grade] = {};
    }
    register[grade][name] = averageScore;
  }

  Object.entries(register).forEach((classStudents) => {
    console.log(`${classStudents[0]} Grade`);

    let name = Object.keys(classStudents[1]);
    console.log(`List of students: ${name.join(", ")}`);

    let score = Object.values(classStudents[1]);
    let totalScore = score.reduce((a, b) => Number(a) + Number(b));
    let average = totalScore / score.length;
    console.log(`Average annual score from last year: ${average.toFixed(2)}`);

    console.log('');
  });
}

schoolRegister([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);
