   
const task = document.querySelector("task");
task.addEventListener("click", enableBtn) 
let addTaskBtn = document.getElementById("add-task");

function enableBtn(){
    addTaskBtn.style.backgroundColor = "red";
    if(task.value != ''){
        addTaskBtn.style.display = "block";
}
}



function add_task(){
    let todoList = document.getElementById("todo-list");
    let li = document.createElement("li");
    let task = document.getElementById("task");
    let checkbox = document.createElement('input');

    checkbox.type = "checkbox";
    checkbox.value = 1;
    checkbox.name = "todo[]";
    // create a new li element and append it to the ul with id "todo-list"
    var input = task.value; // <-- this line
    task.value = '';
    if(input!=''){

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(input));
        todoList.appendChild(li);
        todoList.innerHTML += '<li>' + text + ' <button onclick="delete(this);">Delete</button> </li>';
    }
    else{
        alert('Please add a task, adding a task increases chances of completing it!!!');
    }
}

function delete_task(task){
    task.parentNode.parentNode.removeChild(task.parentNode);
}
