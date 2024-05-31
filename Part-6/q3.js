// Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"]
// output : "United States of America"
let country = ["Australia", "Germany", "United States of America"];
let max = 0;
function func() {
    let str;
    for (let i = 0; i < country.length; i++) {
        if (max <= country[i].length) {
            max = country[i].length;
            str = i;
        }
    }
    return country[str];
}
console.log(func());