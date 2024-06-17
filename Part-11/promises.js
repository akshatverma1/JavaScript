function savetodb(data,sucess,failure){
    let random = Math.floor(Math.random()*10)+1;
    if(4<random){
        sucess();
    }else{
        failure();
    }
}
savetodb("akshat",()=>{
    console.log("data is saved");
    savetodb("verma",()=>{
        console.log("second data save");
        savetodb("verma ji",()=>{
            console.log("third data save");
        },
        ()=>{
            console.log("failure third data");
        });
    },
    ()=>{
        console.log("failure second data");
    });
},()=>{
    console.log("Data is not Saved");
})