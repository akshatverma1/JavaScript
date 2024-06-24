let url = "https://catfact.ninja/fact";
async function apies() {
    try {
        let appp = await axios.get(url);
        console.log(appp.data.fact);
    } catch (err) {
        console.log("Error = " + err);
    }
}
apies();
