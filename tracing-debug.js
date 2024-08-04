function factorial(n) {
    console.log(`factorial called with n = ${n}`); // Trace the input value
  
    if (n === 0) {
        console.log(`Reached base case with n = ${n}`); // Trace the base case
        return 1;
    }
  
    let result = n * factorial(n - 1);
    console.log(`Returning ${result} for factorial(${n})`); // Trace the result before returning
    return result;
  }
  
  console.log(factorial(5)); // Expected output: 120