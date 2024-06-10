let input = document.querySelector("input");
let h1 = document.querySelector("h1");
input.addEventListener("input",function(){
    h1.innerText=input.value;
    console.log(input.value);

});
console.log("Github");