// Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function

function calculate(num1, num2, operation) {
    let result;
  
    switch (operation) {
      case 'addition':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = 'Division by zero';
        }
        break;
      default:
        result = 'Invalid operation';
    }
  
    return result;
  }
  
  // Example usage:
  console.log(calculate(20, 5, 'addition'));//25
  console.log(calculate(20, 5, 'subtract')); //15
  console.log(calculate(20, 5, 'multiply')); //100
  console.log(calculate(20, 5, 'divide'));//4
  console.log(calculate(20, 0, 'divide')); //divided by zero
  console.log(calculate(20, 5, 'modulus'));//invalid operation
  