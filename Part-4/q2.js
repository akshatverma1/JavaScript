// Write a JS program to find the no of digits in a number


let number = 287152;
let count=0;
let copy=number;
while(copy>0){
    count++;
    copy= Math.floor(copy/10);
}
console.log(count);
let msg ="     akshat    ";
msg.trim();