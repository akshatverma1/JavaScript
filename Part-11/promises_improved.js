function savetodb(data){
    return new Promise((success,failure)=>{
    let random = Math.floor(Math.random()*10)+1;
    if(4<random){
        success("Data is Entered");
    }else{
        failure("Data Does not stored");
    }
    });
}
savetodb("Akshat").then(()=>{
    console.log("First Data is stored");
    return savetodb("verma");
}).then(()=>{
    console.log("Second data is also storeddd");
    return savetodb("onkaam");
}).then(()=>{
    console.log("Third Data is Stored");
}).catch(()=>{
    console.log("Data is not stored");
})