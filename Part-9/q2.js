let username = document.createElement("input");
let body = document.querySelector("body");
body.appendChild(username);
username.innerText="Input Box";
username.placeholder="User Name";
username.setAttribute("id","btn");
console.log(username.id);
