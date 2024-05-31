start =100;
end =200;
function random(start,end){
    let diff=end-start;
    let s = Math.random();
    console.log(Math.floor(s*diff)+start);
}
random(start,end);