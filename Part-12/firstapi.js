let url = "https://catfact.ninja/fact";
fetch(url).then((data)=>{
    console.log("Success Data Entered");
    console.log(data);
    data.json().then((realData)=>{
        console.log(realData);
    })
}).catch((error)=>{
    console.log("Something is very Bad in this code like this"+error);
})