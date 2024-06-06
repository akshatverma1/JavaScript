let stringss = "akshat";
function fff(...strin){
    console.log(...strin);
    return strin;
}
let ff = fff(...stringss);
console.log(ff[5]);
console.log(..."verma");
// let odd =[1,3,5,7,9];
// let even =[2,4,6,8];
// let rrr=[...odd,...even];
// console.log(rrr);

// spread eith object ilterals
obj1={
    name :"lakshya verma",
    age : 13
}
let print = {...obj1,mobile:9109621850};
console.log(print);