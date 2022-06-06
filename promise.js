let posts = [
    { title: "post one", body: "this is body one",lastUserActivityTime :"13th of may" },
    { title: "post two", body: "this is body two",lastUserActivityTime : "29th of april"}
]

function getPost(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post)=>{
            output+=`<li> ${post.title} last acivity ${post.lastUserActivityTime}</li>`;
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

createPost({title:"post three",body:"this is body three",lastUserActivityTime : "27th of august"})
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

// createPost({title:"post four",body:"this is body four",lastUserActivityTime : "7th of november"})
//     .then(()=>{
//         let timer=0;
//         getPost();
//             clearInterval(timer);
//             timer = setInterval(() => {
//                 deletePost().then(getPost).catch(err => console.log("error : ", err));
//             }, 2000);
//     })
//     .catch(err=>console.log(err))


//promse.all.......
// 1 task, code like youtuber...
const promise1=Promise.resolve("hello World");
const promise2=10;
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"good bye");
})
const promise4=fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json());


Promise.all([promise1,promise2, promise3,promise4]).then((val1)=>{
    console.log(val1);
   
})

function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // by loop changing of all posts last activity
            //posts.forEach((post)=>{ 
                //posts.lastUserActivityTime
                posts[posts.length-1].lastUserActivityTime=new Date().getTime();
                resolve(posts[posts.length-1].lastUserActivityTime);
           // })
        },2000)
        
    })

}

Promise.all([
    createPost({title:"post four",body:"this is body four",
    lastUserActivityTime : "7th of november"}),updateLastUserActivityTime,deletePost])
    .then(([createPostResolve,updateLastUserActivityTimeResolve,deletePostResolve])=>{
        console.log("val1",new Date());
        updateLastUserActivityTimeResolve().then(()=>{
            console.log("update",new Date());
            getPost();
            //delete resolve after only when update resolve did'not depens on the 
            //set timeOut....
            deletePostResolve().then(()=>{
                console.log("inside",new Date());
                getPost();
            }).catch(err=>console.log(err))
        }).catch(err=>console.log("err2",err));
        //at this level maybe resolve at same time 
        // deletePostResolve().then(()=>{
        //     console.log("inside",new Date());
        //     getPost();
        // }).catch(err=>console.log(err))
    })
    .catch(err=>console.log(err))
    .then(()=>{
        console.log("outside",new Date());
        // deletePost().then(()=>{
        //     console.log("delete after above promises complete");
        //     console.log(posts);
        //     //getPost();
        // })
        // .catch(err=>console.log(err));
    })
    .catch(err=>console.log(err))

