// Write a function to reverse a string.
// Input - Hello
// Outpur - olleH

function ReverseString(str){
let arr=str.split("");
let rev=arr.reverse();
let output=rev.join();
console.log(output);
}
ReverseString("Hello");
