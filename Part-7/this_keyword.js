const student ={
    name : "akshat",
    age : 19,
    math : 100,
    eng : 99,
    hindi :89,
    avg(){
        let avgg =(this.math+this.eng+this.hindi)/3;
        console.log(avgg);
    }
}