// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array
let arr=[1,2,3,4,5,6];
let newArray = arr.map((element)=>{
    return element*element;
})
let avg,v;            
console.log(newArray);
let sum = arr.reduce((returnn,element)=>{
    return returnn+element;
});
v = (sum/arr.length);
console.log(v);