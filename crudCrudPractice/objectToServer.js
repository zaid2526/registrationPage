//Post Requiest....
var submitButton=document.getElementById('btn');
submitButton.addEventListener('click',runEvent);
function runEvent(e){
    e.preventDefault();
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let phone=document.getElementById('phone').value;
    let userDetails={
        "name":name,
        "email":email,
        "phone":phone
    }
    // localStorage.setItem(`${email}`,JSON.stringify(userDetails));
    axios.post('https://crudcrud.com/api/d952f862439846c3b9eb05426af3b4c2/appointmentData',userDetails)
        .then(response=>{
            showOnScreen(userDetails);
            console.log(response)
        })
        .catch(err=>console.log(err))
    
    //clear input field..
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('phone').value='';
}


//........... Refresh page ..........
window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/d952f862439846c3b9eb05426af3b4c2/appointmentData')
        .then(response => {
            console.log(response.data)
            for (i = 0; i < response.data.length; i++) {
                console.log("responses",response.data.length)
                showOnScreen(response.data[i]);
            }
        })
        .catch(err=>{
            document.body.innerHTML=document.body.innerHTML + '<h4> Something went Wrong </h4>'
            console.log(err);
        })
});

function showOnScreen(user){
    var userList=document.getElementById('users');
    if(axios.get(`https://crudcrud.com/api/d952f862439846c3b9eb05426af3b4c2/appointmentData/${user._id}`).then()){
        console.log("remove from screen")
        removeFromScreen(user._id);
    }
    let li=document.createElement('li');
    li.className='list-group-item';
    li.id=`${user._id}`
    li.appendChild(document.createTextNode(`${user.name} ${user.email} ${user.phone}`));
    let dltBtn=document.createElement('button');
    dltBtn.className='btn btn-danger float-right btn-sm  dlt';
    dltBtn.appendChild(document.createTextNode('X'));
    li.appendChild(dltBtn);
    let editBtn=document.createElement('button');
    
    editBtn.appendChild(document.createTextNode('edit'))
    
    li.appendChild(editBtn);

    userList.appendChild(li);
}
//..... userDtails remove from Screen .........
function removeFromScreen(userId){
    let ul=document.getElementById('users');
    let nodeToBeDelted=document.getElementById(userId);
    console.log(nodeToBeDelted);
    if(nodeToBeDelted){
        ul.removeChild(nodeToBeDelted);
    }
}
//------- delete Request------ 

var userList=document.getElementById('users');
console.log(userList)
userList.addEventListener('click',(event)=>{
    if(event.target.tagName==='BUTTON'){
        let button=event.target;
        let li=button.parentNode;
        let ul=li.parentNode;
        if(button.textContent==="X"){
            //li.remove(); it also work.. both are same..
            //ul.removeChild(li);
            console.log(li.id);
            let id=li.id;
            axios.delete(`https://crudcrud.com/api/d952f862439846c3b9eb05426af3b4c2/appointmentData/${id}`)
                .then(response=>{
                    console.log(response);
                })
                .catch(err=>console.log(err));
            ul.removeChild(li)
            
        } else if (button.textContent === 'edit') {
            console.log('edited......');
            console.log(li);
            let user = li.textContent.split(" ");
            document.getElementById('name').value = user[0];
            document.getElementById('email').value = user[1];
            document.getElementById('phone').value = user[2];
            if (axios.get(`https://crudcrud.com/api/d952f862439846c3b9eb05426af3b4c2/appointmentData/${id}`).then()) {
                console.log("remove from screen of edit")
                removeFromScreen(id);
            }
        }

    }
})