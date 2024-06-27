let url = "http://universities.hipolabs.com/search?name=";
let inputText = document.querySelector("input");
let button  = document.querySelector("button");
let country;
button.addEventListener("click",async ()=>{
    country = await inputText.value;
    console.log(country);
    clgFinder();
    // inputText.value="";
})
async function clgFinder(){
    try{
    let call = await axios.get(url+country);
    // console.log(call.data);
    let datas = call.data;
    console.log(datas.length);
    // for(let i = 0;i<datas.length;i++){
    //     // let li = document.createElement("li");
    //     // li=datas[i];
    //     // console.log(li);
    //     datas.name[i];
    // }
    let listt = document.querySelector("ul");
    for(col of datas){
        // console.log(col.name);
        let lii = document.createElement("li"); 
        lii.innerText=col.name;  
        listt.appendChild(lii);
    }
    console.log(listt);
    }catch(err){
        console.log(err);
    }
}
