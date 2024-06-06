let num=[1,2,3,4,79,90,33,634,634,789];
// let final_value = num.reduce((returnn,element)=> returnn+element);
// console.log(final_value);
let max = num.reduce(function maximum(max,element){
    if(max<=element){
        return element;
    }else{
        return max;
    }
});
console.log(max);