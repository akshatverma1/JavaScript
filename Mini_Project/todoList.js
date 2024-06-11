let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
btn.addEventListener("click",function(event){
    let b = document.createElement("li");
    b.innerText= input.value;
    ul.appendChild(b);
    input.value="";
})
input.style.color="blue";