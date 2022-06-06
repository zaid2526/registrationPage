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
        },2000)
    })
}
//getPost();
//createPost({title:"post three",body:"this is body three"},getPost)
createPost({title:"post three",body:"this is body three"})
    .then(()=>{
        getPost();
    })
    .catch(err=>console.log(err))