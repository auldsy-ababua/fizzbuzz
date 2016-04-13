var input = Number(prompt("Please input a number between 1 and 100."));
if (isNaN(input)) {
    alert("Please input a whole number.")
} else if (input < 1 || input > 100 || input % 1 != 0) {
    alert("Please choose a whole number between 1 and 100")
} else {
    for (var startNum = input; startNum < 101; startNum++) {
        if (startNum % 3 === 0 && startNum % 5 === 0) {
            console.log("fizzbuzz");
        } else if (startNum % 3 === 0) {
            console.log("fizz");
        } else if (startNum % 5 === 0) {
            console.log("buzz");
        } else {
            console.log(startNum);
        }
    }
};
