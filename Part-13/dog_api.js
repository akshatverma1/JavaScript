let url = "https://dog.ceo/api/breeds/image/random";
let imgg = document.querySelector("img");
console.dir(imgg.baseURI);
async function callapi(){
    let call = await axios.get(url);
    let dognewurl=call.data.message;
    imgg.src=dognewurl;
}
callapi();