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
