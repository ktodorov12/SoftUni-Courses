function formatGrade(grade) {
  let format =
    grade < 3
      ? console.log(`Fail (2)`)
      : grade >= 3 && grade < 3.5
      ? console.log(`Poor (${grade.toFixed(2)})`)
      : grade >= 3.5 && grade < 4.5
      ? console.log(`Good (${grade.toFixed(2)})`)
      : grade >= 4.5 && grade < 5.5
      ? console.log(`Very good (${grade.toFixed(2)})`)
      : grade >= 5.5
      ? console.log(`Excellent (${grade.toFixed(2)})`)
      : false;
}

formatGrade(3);
