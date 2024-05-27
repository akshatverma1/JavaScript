// Write a JS program to delete all occurrences of element ‘num’ in a given array
let arr=[1,2,3,4,5,6,2,3];
let num=2;
for(let i=0;i<arr.length;i++){
    if(num==arr[i]){
        arr.splice(i,1);
    }
}