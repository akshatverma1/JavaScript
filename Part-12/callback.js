let h1 = document.querySelector("h1");
setTimeout(()=>{
    h1.style.color ="red";
},1000);
function colorChange(colorr,delay,callback){
    setTimeout(()=>{
        h1.style.color=colorr;
        callback();
    },delay)
}
colorChange("red",1000,()=>{
    colorChange("orange",1000,()=>{
        colorChange("blue",1000,()=>{})
    })
});