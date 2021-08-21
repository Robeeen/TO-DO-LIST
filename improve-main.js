var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//on submit form
form.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();

    var newItem = document.getElementById('item').value;
     
    if(newItem){
        document.getElementById('item').style = "border: 1px solid green";
        itemList.insertAdjacentHTML("beforeend", `<li class="list-group-item">${newItem}
        <button class="btn btn-danger btn-sm float-right delete">X</button>
        </li>`);}
        else{
            document.getElementById('item').style = "border: 1px solid red";            
    }
    
}

//on click Remove button to delete.
itemList.addEventListener('click', removeItem);

function removeItem(e){
    e.preventDefault();
    var li = document.querySelector('.list-group-item');
    if(e.target.classList.contains('delete')){  
        if(confirm("are you sure?")){     
        li.remove();}
    }    
}