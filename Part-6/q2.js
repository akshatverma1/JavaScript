// Qs2. Write a JavaScript function to extract unique characters from a string.

let ans =" ";
// ans = “abcdefgh”
function unique(uniqueStr){
    for(let i=0;i<str.length;i++){
        for(let j=0;j<ans.length;j++){
            if(!(str[i]==ans[j])){
                ans=ans+str[i];
            }
        }
    }
    return ans;
}
let str = "abcdabcdefgggh";
console.log(unique(str));