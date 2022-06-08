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


// //task 2 of async/await
// console.log("persone 1 : shows ticket.");
// console.log("persone 2: shows ticket.");
// const preMovie = async ()=>{
//     //async function preMovie(){
//     const promiseWifeBringingTicket = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('ticket')
//         }, 3000)
//     });
//     const getPopCorn= new Promise((resolve,reject)=>resolve('popcorn'));
//     const getButter=new Promise((resolve,reject)=>resolve('butter'));
//     const getColdDrinks =new Promise((resolve,reject)=>resolve('cold drinks'));
//     let ticket=await promiseWifeBringingTicket;
//     console.log(`"wife : I have ${ticket}"`);
//     console.log("husband : we should go in ");
//     console.log("wife : no, im hungry");
//     let popcorn=await getPopCorn
//     console.log(`husband : i got some ${popcorn}`);
//     console.log("husband : we should go in.");
//     console.log("wife :  i need some buttor..");
//     let butter=await getButter;
//     console.log(`husband : i got some ${butter} on ${popcorn}`);
//     console.log(`husband : now, we should go in, we are getting late.`);
//     console.log(`wife : I alse want a cold drink.`);
//     let coldDrink=await getColdDrinks;
//     console.log(`husband : i got the ${coldDrink}`)
//     console.log(("husband : anything else, Darlng."));
//     console.log("no, we must go in, we are getting late.");
//     return ticket;
// }
// preMovie().then((t)=>console.log(`"persone 3 : shows ${t}"`))

// console.log("persone 4 : shows ticket.");
// console.log("persone 5: shows ticket.");


// //task 3 of async/await....

// console.log("persone 1 : shows ticket.");
// console.log("persone 2: shows ticket.");
// const preMovie = async () => {

//     const promiseWifeBringingTicket = new Promise((resolve, reject) => {
//         setTimeout(() => {
//            // resolve('ticket')
//            reject()
//         }, 3000)
//     });
//     const getPopCorn = new Promise((resolve, reject) => resolve('popcorn'));
//     const getCandy = new Promise((resolve, reject) => resolve('candy'));
//     const getColdDrinks = new Promise((resolve, reject) => resolve('cold drinks'));
//     //these are not depends on eachother.. so we does not wait for any of other..
//     let ticket;

//     try {
//         ticket = await promiseWifeBringingTicket;
//         let [popCorn, candy, coldDrink] = await Promise.all([getPopCorn, getCandy, getColdDrinks])
//         console.log(`${popCorn} ${candy} ${coldDrink}`);

//     } catch (e) {
//         ticket = 'sad face...';
//     }
//     return ticket;
// }
// preMovie().then((t) => console.log(`"persone 3 : shows ${t}"`));

// //when promise depend on anothe promise...
// const testUser=async()=>{
//     const loadUserForm= new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("user form loaded");
//            resolve('user form loaded')
//         }, 3000)
//     });

//     const entreUserName= new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("username entered.");
//            resolve('username entered...')
//         }, 3000)
//     });

//     const verifyUserDetails= ()=>{
//            return 'user verified...';
//     }

//     await loadUserForm;
//     await entreUserName;
//     const verifyDetails= verifyUserDetails();

//     return verifyDetails;
// }
// testUser().then((t)=>console.log(t))



//task 4 (async/await)......

let posts = [
    { title: "post one", body: "this is body one" },
    { title: "post two", body: "this is body two" }
]

const userPost = async () => {
    const getPost = () => {
        setTimeout(()=>{
            let output='';
            posts.forEach((post)=>{
                output+=`<li> ${post.title} </li>`;
                document.body.innerHTML=output
            });
        },1000);
    };

    const createPost = (post) => {
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //posts.push(post);
            let error=false;
            if(!error){
                resolve(posts.push(post));
            }else{
                reject("post not created")
            }
        },1000)
    });
    }

    const deletePost = new Promise((resolve, reject) => {
        setTimeout(() => {
            //posts.push(post);
            let error = false;
            if (!error) {
                resolve(posts.pop());
                console.log("deleted",posts)
            } else {
                reject("post not created")
            }
        }, 4000);
    });


    getPost();
    await createPost({ title: "post three", body: "this is body one" });
    await deletePost;
    getPost();
    await createPost({ title: "post four", body: "this is body four" });
    getPost();
   

    
    
}

userPost();