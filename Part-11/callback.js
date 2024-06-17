let h1 = document.querySelector("h1");
function changeColor(color,delay,nextChangeColor){
    setTimeout(function (){
        h1.style.color=color;
        nextChangeColor();
    },delay);

}
changeColor("red",1000,()=>{
    changeColor("violet",1000,()=>{
        changeColor("green",1000,()=>{
            changeColor("yellow",1000)
        });
    });
})