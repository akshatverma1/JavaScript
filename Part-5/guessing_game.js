let username = prompt("Enter the Any Maximum Range");
let max = Math.random();
let range = Math.floor(max*username);
console.log(range);
let guess = prompt("Enter the Suggestion Number");
while(true){
if(range==guess){
    console.log("Games Passed");
    break;
} else if(guess=="quite"){
    console.log("Game End");
    break;
}else{
    guess = prompt("Enter the Suggestion Number again");
}
}