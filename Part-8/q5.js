// Qs5. Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object.
function mergeObjects(obj1,obj2){
    // console.log({...obj1, ...obj2});
    let ee = {...obj1, ...obj2};
    console.log(ee);
}
mergeObjects({a:1,b:2},{c:3,d:4});