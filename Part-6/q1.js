let arr = [8,9,10,1,2,3,4,5,6,7,8,9];

let aks=[];
let count =0;
function arrayfunction(num){
    for(let i=0;i<arr.length;i++){
        if(num<arr[i]){
            aks[count]=arr[i];
            count++;
        }
    }
    return aks;
}
let number =5;
console.log(arrayfunction(number));