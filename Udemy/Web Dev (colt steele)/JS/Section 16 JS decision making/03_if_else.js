let marks = 0;

if (marks === 10) {
    console.log("You got Full Marks!");
}
else if (marks <= 3 && marks >= 0) {
    console.log("You are Fail!");
}
else if (marks > 3 && marks < 10) {
    console.log("You are Pass!");
}
else{
    console.log("Invaild Marks");
}