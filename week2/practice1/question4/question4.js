let num = window.prompt("Enter a number");
num = parseInt(num);
if (isNaN(num)) {
    console.log("That is not a number");
}
else if ((num % 4 == 0) && (num % 100 != 0) || (num % 400 == 0)) {
    console.log("its a leap year");
}
else {
    console.log("its not a leap year");
}