let h1 = document.querySelector("h1");
function changeColor(delay,color){
    setTimeout(function (){
        h1.style.color = color;
    },delay);
}
changeColor(1000,"red");
changeColor(2000,"blue");
changeColor(3000,"green");