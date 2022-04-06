let grade = 80;

if (grade >= 90 && grade <= 100) {
    console.log("A");
} else if (grade < 90 && grade >= 80) {
    console.log("B");
} else if (grade < 80 && grade >= 70) {
    console.log("C");
} else if (grade < 70 && grade >= 60) {
    console.log("D");
} else if (grade < 60 && grade >= 50) {
    console.log("E");
} else if (grade < 50 && grade >= 0) {
    console.log("F");
} else {
    console.log("Error, grade value must be between 0 and 100!");
}