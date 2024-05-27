let arr=['a','b','c','d'];
let n = prompt("Enter th element You want to Search");
let r = arr.includes(n);
if(r==true){
    console.log("Elements are in array");
}
else{
    console.log("Elements are in not array");
}