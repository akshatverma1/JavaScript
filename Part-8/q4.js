function doubleAndReturnArgs(...arrr){
    let newArray = arrr.map((element)=>{
        return element*2;
    });
    console.log(newArray);
}
doubleAndReturnArgs(1,[2],3,4,5);