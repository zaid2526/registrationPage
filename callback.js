const posts=[
    {title:'post one', body :'this is body one', createdAt:new Date().getTime()},
    {title:'post two', body :'this is body two',createdAt:new Date().getTime()}
];

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
//function getPost(){
//    setTimeout(()=>{
//        let output='';
//        posts.forEach((post,index)=>{
//            output+=`<li> ${post.title} -- last updtaed ${(post.createdAt-new Date().getTime())/1000} seconds ago</li>`;
//           document.body.innerHTML=output;
//            //console.log("index",index);
//        });
//   },1000)
//}

//getPost();

function createPost(post,callback){
    setTimeout(()=>{
        posts.push({...post, createdAt:new Date().getTime()});
        callback();
    },2000)
};



function create4thPost(post,callback){
    setTimeout(()=>{
        posts.push({...post, createdAt:new Date().getTime()});
        callback();
    },6000)
}
createPost({title:'post three',body:'this is body three'},getPost);
create4thPost({title:'post four',body:'this is body three'},getPost);


/*
var timer;
var count=0;
function lastEditedInSecondsAgo (){
    count=0;
    clearInterval(timer);
    timer=setInterval(()=>{
        count++;
        console.log(count,timer);
    },1000)
}
//lastEditedInSecondsAgo();
*/