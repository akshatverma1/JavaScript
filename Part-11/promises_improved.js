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
    console.log("First Data Is stored");
    return savetodb("verma");
}).then(()=>{
    console.log("Second data is also storeddd");
    console.log("akshat");
    console.log("akshat");
    console.log("akshat");
    console.log("akshat");
    console.log("akshat");
    console.log("akshat");
    console.log("akshat");
    console.log("akshat");
    console.log("akshat");
    console.log("akshat");
    console.log("akshat");
    console.log("akshat");
    console.log("akshat");
    console.log("akshat");
    console.log("akshat");
}).catch(()=>{
    console.log("Data is not stored");
})