const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'cloud',
    password: "2424"
  });

  try{
  connection.query("SHOW TABLES",(err,result)=>{
    
        if(err) throw err;
        console.log(result);
        connection.end();

    
  })}
  catch(err){
    console.log(err);
}







//faker
// let createRandomUser = () => {
//     return {
//       userId: faker.string.uuid(),
//       username: faker.internet.userName(),
//       email: faker.internet.email(),
//       avatar: faker.image.avatar(),
//       password: faker.internet.password(),
//       birthdate: faker.date.birthdate(),
//       registeredAt: faker.date.past(),
//     };
//   }
//   for(let i =0;i<10;i++){
//     console.log(createRandomUser());
//   }
//
