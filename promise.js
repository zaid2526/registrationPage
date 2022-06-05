const posts = [
    { title: 'post one', body: 'this is body one', createdAt: new Date().getTime() },
    { title: 'post two', body: 'this is body two', createdAt: new Date().getTime() }
];
/*
function getPost(){
    let intervalId=0;
    clearInterval(intervalId);
    intervalId=setInterval(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li> ${post.title} -- last updtaed ${parseInt((post.createdAt-new Date().getTime())/1000)} seconds ago</li>`;
            document.body.innerHTML=output;
            //console.log("index",index);
        });
    },1000)
    //console.log(intervalId)
    
}
*/
function getPost() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li> ${post.title} -- last updtaed ${(post.createdAt - new Date().getTime()) / 1000} seconds ago</li>`;
            document.body.innerHTML = output;
            //console.log("index",index);
        });
    }, 1000)
}

//getPost();

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ ...post, createdAt: new Date().getTime() });
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('ERROR : Somethng went wrong');
            }
        }, 2000);
    })
};
/*
createPost({ title: 'post three', body: 'this is body three' })
    .then(getPost)
    .catch(err => console.log(err));
*/

function create4thPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ ...post, createdAt: new Date().getTime() });
            let error = false;
            if (!error) {
                resolve("4th is craeted");
            } else {
                reject("Somethingf went wrong");
            }
        }, 6000);
    })
};
/*
create4thPost({ title: 'post four', body: 'this is body three' })
    .then((msg)=>{
        console.log(msg);
        getPost();
    })
    .catch(err => console.log(err));
*/


// delete one after one second...
/*
function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.pop();
            let error = false;
            if (!error) {
                resolve();
            } else {
                reject("Somethingf went wrong");
            }
        }, 7000)
    })
};
*/

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //posts.pop();
            let error = false;
            if (!error && posts.length!=0) {
                resolve();
            } else {
                reject("Somethingf went wrong");
            }
        }, 7000)

    })
}

deletePost().then(()=>{
    deletep();    
}).catch(err => console.log(err));

function deletep(){
    let timer=0;
    clearInterval(timer);
    timer=setInterval(()=>{
        posts.pop();
        getPost();
    },1000)
    console.log(timer);
}

//deletep();


//promse.all.......
const promise1=Promise.resolve("hello World");
const promise2=10;
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"good bye");
})
const promise4=fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json());


Promise.all([promise1,promise2, promise3,promise4]).then((val)=>{
    console.log(val);
})