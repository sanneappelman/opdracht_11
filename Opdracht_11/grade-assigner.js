function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'E';
    }
}
assignGrade();

for (grade = 60; grade <= 100; grade++) {
    assignGrade(score(60));
    console.log("Voor", grade, " punten, krijg je een ", score);
}