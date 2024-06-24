let url = "https://catfact.ninja/fact";
fetch(url).then((data)=>{
    data.json().then((originalData)=>{
        console.log(originalData.fact);
    })
}).catch((errr)=>{
    console.log("API Does not Exicted"+errr);
})
