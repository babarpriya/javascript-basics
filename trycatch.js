function divideNumbers(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return a / b;
  } catch (error) {
    return error.message;
  }
}
console.log(divideNumbers(10, 2)); 
console.log(divideNumbers(10, 0)); 
