let button = document.querySelector("button");
let paragraph = document.querySelector("p");
button.addEventListener("click",()=>{
    apies();
})
let url = "https://catfact.ninja/fact";
async function apies() {
    try {
        let appp = await axios.get(url);
        console.log(appp.data.fact);
        paragraph.innerText=appp.data.fact;
    } catch (err) {
        console.log("Error = " + err);
    }
}