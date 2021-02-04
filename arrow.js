// function doubleIt(num){
// return num*2;
// }

// const doubleIt= function fun(num){
//     return num*2;

// }
const doubleIt= num=>num*2;
const result =doubleIt(50);
const add=(x,y)=> x+y;
const result1= add(10,15);
const add1=()=>5;
const result2= add1();
const bisal=(x,y)=>{
    const sum = x+y;
    const diff = x-y;
    const result= sum*diff;
    return result;
}
const result3= bisal(5,6);
console.log(result3);
console.log(result2);
console.log(result1);
console.log(result);