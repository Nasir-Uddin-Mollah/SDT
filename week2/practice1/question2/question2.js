let num = window.prompt("Enter a number");
num = parseInt(num);
if (isNaN(num)) {
    console.log("That is not a number");
}
else if (num % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}