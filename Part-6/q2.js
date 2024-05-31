// Qs2. Write a JavaScript function to extract unique characters from a string.

let ans =" ";
// ans = “abcdefgh”
function unique(uniqueStr){
    for(let i=0;i<str.length;i++){
        let char = str[i];
        if(ans.indexOf(char)==-1){
            ans = ans + char;
        }
    }
    return ans;
}
let str = "abcdabcdefgggh";
console.log(unique(str));