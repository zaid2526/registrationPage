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
            console.log(response)
        })
        .catch(err=>console.log(err))
    
    //clear input field..
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('phone').value='';
}

