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
let str = "I love coding";
// str.indexOf("love");
let car =["Audi","Mercedes","BMW","Xylo","Santro","Tata safari","ven"];

let rr = function func(){
    console.log("Akshat");
}
let arrayy = [1,2,3,4,5,6];
let double = arrayy.filter((knoww)=>{
    console.log(knoww);
    return 2;
})
let strruu = "keyboard";
function spreadd(...stryrty){
    console.log("spread");
    return stryrty;
}
let a = spreadd(...strruu);
function ddd(data){
    return new Promise((Success,failure)=>{
        if(data>3){
            Success("Data is Entered");
        }else {
            failure("Data does not Stored");
        }
    })
}
