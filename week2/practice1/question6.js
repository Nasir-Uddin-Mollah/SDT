var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

const bigname = (arr) => {
    let big = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > big.length) {
            big = arr[i];
        }
    }
    return big;
}
console.log(bigname(friends));