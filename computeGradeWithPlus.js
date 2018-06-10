// COMPUTEGRADEWITHPLUS PROBLEM
// HackReactor
function convertScoreToGradeWithPlusAndMinus(score) {
    let gradeKeys = Object.keys(grades);
    let actualGrade = 'INVALID SCORE';
    let plusMinusScore = Number(score.toString()[1]);
    if(score <= 100 && score >= 0) {
      gradeKeys.map(function(grade) {
        if(score <= grades[grade][0] && score >= grades[grade][1]) {
          actualGrade = grade;
        }
      })
      if(actualGrade !== 'F' && score !== 100 && plusMinusScore <= 2) {
        actualGrade += '-';
      } else if (score === 100 || (actualGrade !== 'F' && plusMinusScore >= 8)) {
        actualGrade += '+';
      }
    }
    return actualGrade;
}