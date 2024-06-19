function sumOfProducts(n1, n2) {
    // Convert numbers to strings
    const str1 = n1.toString();
    const str2 = n2.toString();
  
    // Determine the maximum length
    const maxLength = Math.max(str1.length, str2.length);
  
    // Pad the shorter string with leading zeros
    const paddedStr1 = str1.padStart(maxLength, '0');
    const paddedStr2 = str2.padStart(maxLength, '0');
  
    // Calculate the sum of products of corresponding digits
    let sum = 0;
    for (let i = 0; i < maxLength; i++) {
      const digit1 = parseInt(paddedStr1[i], 10);
      const digit2 = parseInt(paddedStr2[i], 10);
      sum += digit1 * digit2;
    }
  
    return sum;
}
  console.log(sumOfProducts(6, 34));
  