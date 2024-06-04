let id1=setInterval(()=>{
    console.log("Akshat");
},2000);
setTimeout(()=>{
    clearInterval(id1);
},10000000);
// let length = 4;
// function callback() {
//     console.log(this.length);
// }
// const object = {
//     length: 5,
//     method() {
//         callback();
//     },
// };
// object.method();