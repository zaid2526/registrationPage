let posts = [
    { title: "post one", body: "this is body one" },
    { title: "post two", body: "this is body two" }
]

function getPost(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post)=>{
            output+=`<li> ${post.title} </li>`;
            document.body.innerHTML=output
        });
    },1000);
}

function createPost(post){
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
    })
}
getPost();
//createPost({title:"post three",body:"this is body three"},getPost)

createPost({title:"post three",body:"this is body three"})
    .then(()=>{
        getPost();
    })
    .catch(err=>console.log(err))

//creat deletePost function which uses promises
// that delete last element of array in 1 senod  
function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.pop();
            let error=false;
            if(!error && posts.length!=0){
                resolve();
            }else{
                reject("array is empty")
            }
            
        },1000);
    })
    

}

createPost({title:"post four",body:"this is body four"})
    .then(()=>{
        let timer=0;
        getPost();
            clearInterval(timer);
            timer = setInterval(() => {
                deletePost().then(getPost).catch(err => console.log("error : ", err));
            }, 2000);
    })
    .catch(err=>console.log(err))


//promse.all.......
// 1 task, code like youtuber...
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