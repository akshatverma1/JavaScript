// function str(a,b,c,d){
//     let strrr=[a+b+c+d];
//     return strrr;
// }
// console.log(str("akshat","verma","onkaam","ceo"));


function conate(str){
    let addstring="";
    for(let i=0;i<str.length;i++){
        addstring = addstring +str[i];
    }
    return addstring;
}
let str =["akshat","s","sd","ff"];
console.log(conate(str));