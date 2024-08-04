function sumArray(arr) {
    debugger;
    let sum = 0;
    for (let i = 1; i <= arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Expected output: 15