var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//on submit form
form.addEventListener('submit', addItem);
//on click Remove button to delete.
itemList.addEventListener('click', removeItem);

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


function addItem(e){
    e.preventDefault();

    //get the value from Search Box and hold it with variable.
    var newItem = document.getElementById('item').value;
    if(newItem && newItem==newItem){
        document.getElementById('item').style = "border: 1px solid";
        //create li element and hold the value with variable.
        var li = document.createElement('li');
        //get the class name of the li to be more specific.
        li.className = 'list-group-item';
        //add the value from search box to li.
        li.appendChild(document.createTextNode(newItem));
        //create li under UL.
        itemList.appendChild(li);
        //create new button variable.
        var newButton =  document.createElement('button');
        //get the class anem of button to be more specific.
        newButton.className = 'btn btn-danger btn-sm float-right delete';

        newButton.appendChild(document.createTextNode('X'));
        li.appendChild(newButton);
    }
    else{
        document.getElementById('item').style = "border: 1px solid red";
    }

}