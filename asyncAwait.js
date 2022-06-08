/*
async function fetchUser(){
    const res= await fetch("https://jsonplaceholder.typicode.com/users");
    //fetch return a promise...
    console.log( res)
    const data=await res.json();
    console.log("data",data);
}
fetchUser();

async function myDis(){
     let myPro=  await new Promise((resolve,reject)=>{
        resolve("love");
    }) 
    console.log( myPro);
    //console.log(await myPro);
}
myDis();

async function init(){
    
    
    await createPost({title:"post five",body:"this is body four"});
    //getp();
    getPost();
    
    
}
init();
function getp(){
    console.log("after await")
}

*/


// console.log("persone 1 : shows ticket.");
// console.log("persone 2 : shows ticket.");
// const promiseWifeBringingTicket=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('ticket')
//     },3000)
// });
// //promiseWifeBringingTicket.then((m)=>console.log("person 3 :shows ticket."));
// //make another promise, wife says i'm hungry.....
// const getPopCorn=promiseWifeBringingTicket.then((t)=>{
   
//     return new Promise((resolve,reject)=>{
//         console.log("wife : I have tickets");
//         console.log("husband : we should go in ");
//         console.log("wife : no, im hungry");
//         resolve(`${t} popcorn`);
//     });
// });
// //getPopCorn.then((t)=>{console.log(`persone 3 : shows ${t}.`)})
// //make another promise, wife need some butter for popcorn....
// const getButter=getPopCorn.then((t)=>{
   
//     return new Promise((resolve,reject)=>{
//         console.log("husband : i got some popcorn");
//         console.log("husband : we should go in.");
//         console.log("wife :  i need some buttor..");
//         resolve(`${t} popcorn butter`);
//     })
// });
// getButter.then((t)=>{

//     console.log(`person 3: shows ${t}. `);
// })
// console.log("persone 4 : shows ticket.");
// console.log("persone 5: shows ticket.");

console.log("persone 1 : shows ticket.");
console.log("persone 2: shows ticket.");
const preMovie = async ()=>{
    //async function preMovie(){
    const promiseWifeBringingTicket = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket')
        }, 3000)
    });
    const getPopCorn= new Promise((resolve,reject)=>resolve('popcorn'));
    const getButter=new Promise((resolve,reject)=>resolve('butter'));
    const getColdDrinks =new Promise((resolve,reject)=>resolve('cold drinks'));
    let ticket=await promiseWifeBringingTicket;
    console.log(`"wife : I have ${ticket}"`);
    console.log("husband : we should go in ");
    console.log("wife : no, im hungry");
    let popcorn=await getPopCorn
    console.log(`husband : i got some ${popcorn}`);
    console.log("husband : we should go in.");
    console.log("wife :  i need some buttor..");
    let butter=await getButter;
    console.log(`husband : i got some ${butter} on ${popcorn}`);
    console.log(`husband : now, we should go in, we are getting late.`);
    console.log(`wife : I alse want a cold drink.`);

    return ticket;
}
preMovie().then((t)=>console.log(`"persone 3 : shows ${t}"`))

console.log("persone 4 : shows ticket.");
console.log("persone 5: shows ticket.");