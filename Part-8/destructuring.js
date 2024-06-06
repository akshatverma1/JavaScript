let car=["Omni","Safari","Santro","Xylo"];
let [Fisrt,Second,...other]=car;
console.log(Fisrt,Second+ " "+other);

//destructing with object
const obj1={
    name : "Akshat Verma",
    age : 19,
    Gender : "male"
}
// let user=obj1.name;
// console.log(user);
//or
// const { name :user}=obj1;
// console.log(user);
// //or
// const { name}=obj1;
// console.log(user);
// //or defult value
const { name,city="indore"}=obj1;
console.log(city);