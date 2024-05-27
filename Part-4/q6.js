let number = "12345";
let copy = number;
let sum=0;
console.log(number%10);
while(copy>0){
    di = copy%10;
    sum=sum+di;
    copy = Math.floor(copy/10);
}
console.log(sum);