// Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.
function sumOfDigits(num) {
    function digitSum(n) {
      return n
        .toString()
        .split("")
        .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
    }
  
    while (num >= 10) {
      num = digitSum(num);
    }
  
    return num;
  }
  
  const result = sumOfDigits(456);
  console.log(result);