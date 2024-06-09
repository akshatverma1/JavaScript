let btn = document.querySelector("button");
let body = document.querySelector("body");
btn.addEventListener("click", function () {
    let red = Math.floor((Math.random()) * 255);
    let green = Math.floor((Math.random()) * 255);
    let blue = Math.floor((Math.random()) * 255);
    let color = `rgb(${red},${green},${blue})`;
    body.style.backgroundColor=color;
})
