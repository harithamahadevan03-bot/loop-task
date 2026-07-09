


console.log("Beginner Task 2 -  while Loops");
//Print numbers from 1 to 10
var i = 0;
console.log("1. Print numbers from 1 to 10");
var i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

//Print numbers from 10 to 1
console.log("2. Print numbers from 10 to 1");
var i = 10;
while (i>=1) {
  console.log(i);
  i--;
}
//Print even numbers from 2 to 20
console.log("3.print even numbers from 2 to 20");
var i = 2;
while(i<=20){
    console.log(i);
    i=i+2;
}
//print odd numbers from 1 to 19
console.log("4.print odd numbers from 1 to 19")
var sum=1;
while(sum<20){
    console.log(sum);
    sum=sum+2;

}
//print sum of numbers from 1 to 100
console.log("print sum of numbers from 1 to 100")
let m=0;
let n2=0;

while(n2<=100){
    
    m=m+n2;
    n2++;
    console.log("value of n2:"+n2);
    console.log("value of m:"+m);

}
console.log(m);
console.log("Intermediate tasks")

//print multiplication table of 7
console.log("print multiplication table of 7");
var i=1;
while(i<10){
    console.log(i*7);
    i++;

    
}
//print sum of digits
console.log("Sum of digits of a number");
var n3=12345;
var sum0=0;
while(n3>0){
    sum0+=n3%10;
    n3=Math.floor(n3/10);
}
console.log(n3);
console.log(sum0);

//factorial using while
var s = 9;
var facts = 1;

while (s > 5) {
    facts=facts*s;
    s--;
}
console.log("Factorial =", facts);
console.log(s);

//reverse 
let num = 12345;
let reverse = 0;

while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
}

console.log("Reverse =", reverse);

//count the digits

let number = 1234567;
let count = 0;

while (number > 0) {
    count++;
    number = Math.floor(number/ 10);
}

console.log("Digits =", count);

//sum of digits

let numb= 123456;
let sums = 0;

while (numb > 0) {
    sums += numb % 10;
    numb = Math.floor(numb / 10);
}

console.log("Sum of digits =", sums);

//do while loop
console.log("do-while practice")
console.log("1.do while loop print numbers from 1 to 5");
i=1;
do{
    console.log(i);
    i++;
} while(i<6);


console.log("even numbers from 2 to 20");
i=2;
do{
    console.log(i);
    i+=2;
}while(i<=20)

console.log("odd numbers from 1 to 19");
i=1;
do{
    console.log(i);
    i+=2;
}while(i<=19)

console.log("multiplication table using 9");
i=1;
do{
    console.log(i*9);
    i+=1;
}while(i<=10);

//factorial using do-while

let n1= 7;
let fact1 = 1;

do {
    fact1=fact1*n1;
    n1--;
} while (n1> 0);
console.log("Factorial =", fact1);

//simple menu using do-while


var prompt = require("prompt-sync")();

let user;

do {
    user = Number(prompt("Enter number: "));

    if (user === 9) {
        console.log("Program is running...");
    } else if (user === 0) {
        console.log("Program Ended.");
    } else {
        console.log("Invalid Choice!");
    }

} while (user !== 0);

