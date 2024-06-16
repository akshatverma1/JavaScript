function one(){
    return 1;
}
function two(){
    return 2;
}
function third(){
    return one()+two();
}
console.log(third());