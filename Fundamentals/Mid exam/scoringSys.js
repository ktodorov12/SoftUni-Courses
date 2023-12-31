function scoringSys(info) {
  info = info.map(Number);
  let studentsNum = info.shift();
  let lectureNum = info.shift();
  let additionalBonus = info.shift();

  let maxBonus = 0;
  let bestStudentLectures = 0;

  for (let i = 0; i < studentsNum; i++) {
    let currentStudent = info[i];
    let totalBonus = (currentStudent / lectureNum) * (5 + additionalBonus);

    if (totalBonus > maxBonus) {
      maxBonus = totalBonus;
      bestStudentLectures = info[i];
    }
  }

  console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
  console.log(`The student has attended ${bestStudentLectures} lectures.`);
}

//scoringSys(["5", "25", "30", "12", "19", "24", "16", "20"]);

scoringSys([
  "10",
  "30",
  "14",
  "8",
  "23",
  "27",
  "28",
  "15",
  "17",
  "25",
  "26",
  "5",
  "18",
]);
