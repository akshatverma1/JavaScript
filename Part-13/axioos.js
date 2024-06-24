let url = "https://catfact.ninja/fact";
async function apies() {
    try {
        let appp = await fetch(url)
        let data = await appp.json();
        console.log(data.fact);
    } catch (err) {
        console.log("Error = " + err);
    }
}
apies();