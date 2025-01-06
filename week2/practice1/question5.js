const dividedby3 = [];
const dividedby5 = [];

for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0) {
        dividedby3.push(i);
    }
    if (i % 5 == 0) {
        dividedby5.push(i);
    }
}
console.log(dividedby3);
console.log(dividedby5);