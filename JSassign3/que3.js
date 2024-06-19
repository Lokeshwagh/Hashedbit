// let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice

let str='INDIA'
let arr=str.split('');
arr.splice(3,0,'O','N','E','S');
let newString=arr.join('');
console.log(newString);
// here there will be print INDONESIA