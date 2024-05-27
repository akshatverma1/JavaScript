// Qs5. Find the largest number in an array with only positive numbers.
let arr=[1,2,233,4,5];
let max=0;
for(let i=0;i<arr.length;i++){
    if(max<=arr[i]){
        max=arr[i];
    }
}
console.log(max);