let heading = document.querySelector("h1");
// heading.style.color="red";
function changed(colorr){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            heading.style.color=colorr;
            resolve();
        },1000);
    });
}
async function calll(){
    await changed("red");
    await changed("violet");
    await changed("white");
    await changed("green");
    await changed("pink");
    await changed("red");
    await changed("violet");
    await changed("white");
    await changed("green");
    await changed("pink");
}
calll();