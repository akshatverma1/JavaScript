// Qs4. Write a JavaScript function to count the number of vowels in a String argument.
let count=0;
let str ="aeiou";
function vowels(){
    for(let i=0;i<str.length;i++){
        if((str[i]=="a")||(str[i]=="e")||(str[i]=="i")||(str[i]=="o")||(str[i]=="u")){
            count++;
        }
    }
    return count;
}
console.log(vowels());