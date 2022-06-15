var submitButton=document.getElementById('btn');
submitButton.addEventListener('click',addExpense);
function addExpense(e){
    e.preventDefault();
    
    let expenses=document.getElementById('expense').value;
    let description=document.getElementById('description').value;
    let category=document.getElementById('category').value;
    
    //let test=JSON.parse(localStorage.getItem(`${document.getElementById('email').value}`));
    //console.log('test',test)
    let expeneseDetails={
        "expenses":expenses,
        "description":description,
        "category":category
    }
    // localStorage.setItem(`${expeneseDetails.id}`,JSON.stringify(expeneseDetails));
    axios.post('https://crudcrud.com/api/d952f862439846c3b9eb05426af3b4c2/expnsesDetails',expeneseDetails)
        .then(response=>{
            showOnScreen(expeneseDetails);
            console.log(response)
        })
        .catch(err=>console.log(err))
    showOnScreen(expeneseDetails);

    //clear input field..
    document.getElementById('expense').value='';
    document.getElementById('description').value='';
    // document.getElementById('category').value='';
}
function showOnScreen(expense){
    if(axios.get(`https://crudcrud.com/api/d952f862439846c3b9eb05426af3b4c2/expnsesDetails/${user._id}`).then()){
        console.log("remove from screen")
        removeFromScreen(user._id);
    }
    var expenseList=document.getElementById('expenses');

    let li=document.createElement('li');
    li.id=`${expense._id}`
    li.appendChild(document.createTextNode(`${expense.expenses} ${expense.description} ${expense.category}`));

    let dltBtn=document.createElement('button');
    dltBtn.appendChild(document.createTextNode('X'));
    li.appendChild(dltBtn);

    let editBtn=document.createElement('button');
    editBtn.appendChild(document.createTextNode('edit'))
    li.appendChild(editBtn);
    expenseList.appendChild(li);
}

//........... Refresh page ..........
window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/d952f862439846c3b9eb05426af3b4c2/expnsesDetails')
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

//..... userDtails remove from Screen .........
function removeFromScreen(expensId){
    let ul=document.getElementById('users');
    let nodeToBeDelted=document.getElementById(expensId);
    console.log(nodeToBeDelted);
    if(nodeToBeDelted){
        ul.removeChild(nodeToBeDelted);
    }
}

//------- delete and edit or update Request------ 

var expenseList=document.getElementById('users');
console.log(expenseList)
expenseList.addEventListener('click',(event)=>{
    if(event.target.tagName==='BUTTON'){
        let button=event.target;
        let li=button.parentNode;
        let ul=li.parentNode;
        if(button.textContent==="X"){
            //li.remove(); it also work.. both are same..
            //ul.removeChild(li);
            console.log(li.id);
            let expenseid=li.id;
            axios.delete(`https://crudcrud.com/api/d952f862439846c3b9eb05426af3b4c2/expnsesDetails/${expenseid}`)
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
            if (axios.get(`https://crudcrud.com/api/d952f862439846c3b9eb05426af3b4c2/expnsesDetails/${expenseid}`).then()) {
                console.log("remove from screen of edit")
                removeFromScreen(expenseid);
            }
        }

    }
})

// // 5nVatxZTHbOQA0hMdQw8Gvbx5JHJWeSB