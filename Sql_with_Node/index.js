const { faker } = require('@faker-js/faker');

// faker
let createRandomUser = () => {
    return [
        userId= faker.string.uuid(),
        username= faker.internet.userName(),
        email= faker.internet.email(),
        password= faker.internet.password(),
    ];
}

console.log("Akshat");
console.log("function");


const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'cloud',
    password: "2424"
});

//For Single Used
//let p = "INSERT INTO company (id,username,email,password) VALUES (?,?,?,?)";
//let data1 = ["123","akshat","akshaverma14@gmail.com","2424"];
//

//For Multiple Used
let p = "INSERT INTO company (id,username,email,password) VALUES ?";
let data1 = [["124", "lakshya", "onkam288@gmail.com", "2512"], ["125", "rohan", "onkaam1@gmail.com", "2513"],
["126", "prince", "ankaam1@gmail.com", "2514"]];
//

let data2 = createRandomUser();
console.log(data2);

let data3 = [];

for (let i=0;i<1000;i++){
    let d = createRandomUser();
    data3.push(d);
}
console.log(data3);


try {
    connection.query(p, [data3], (err, result) => {

        if (err) throw err;
        console.log(result);



    })
}
catch (err) {
    console.log(err);
}

connection.end();



