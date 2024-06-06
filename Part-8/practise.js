let num = [-91, 2, 3, 4, 5, 6, 7, 8, 90,80,50];
// let array_mul = num.filter((ele)=>{
//     return ele%10==0;
// });
let min_variable =0;
let min = num.reduce((min_variable,element)=>{
    if(min_variable<element){
        return min_variable;
    }else{
        return element;
    }
});
console.log(min);