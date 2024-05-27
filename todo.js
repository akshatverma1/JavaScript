let mode = prompt("Enter Your Mode");
let todo =[];
while(true){
    if(mode=="quite"){
        break;
    }
    if(mode=="list"){
        console.log("List Mode");
        for(i=0;i<todo.length;i++){
            console.log(i, todo[i]);
        }
    } else if(mode=="add"){
        console.log("Add mode")
        let items = prompt("ENTER THE LIST");
        todo.push(items);
    }else if(mode=="delect"){
        console.log("Delect Mode");
        let n = prompt("Enter the index");
        todo.splice(n,1);
        console.log("Delect Succesfully");
    }
    mode = prompt("Enter Your Mode");
}