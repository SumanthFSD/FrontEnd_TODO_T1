function showBtn(){
    const addTaskbtn = document.getElementById("add-task");
    if(document.getElementById('task').value != ''){
        addTaskbtn.style.display = 'block';
    }
}

function add_task(){
    let todoList = document.getElementById("todo-list");
    let li = document.createElement("li");
    let task = document.getElementById("task");
    let checkbox = document.createElement('input');

    checkbox.type = "checkbox";
    checkbox.value = 1;
    checkbox.name = "todo-checkbox";
    // create a new li element and append it to the ul with id "todo-list"
    var input = task.value;
    const addTaskbtn = document.getElementById("add-task");
    addTaskbtn.style.display = 'none';
    task.value = '';
    if(input!=''){
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(input));
        li.innerHTML += '<button class="delete-task" onclick = delete_task(this)><i class="fas fa-trash"></i></button>'
        todoList.appendChild(li);
    }
    else{
        alert('Please add a task, adding a task increases chances of completing it!!!');
    }
    updateTasksCount();
    
}

function delete_task(listItem){
    listItem.parentNode.remove();
    updateTasksCount();
}


function updateTasksCount(){
    let todoList = document.getElementById("todo-list");
    const totalCountSpan = document.getElementById('totalCount');
    const totalItems = todoList.children.length;
    totalCountSpan.textContent = totalItems;
}

function showCompletedTasks(){

}

function showUncompletedTasks(){

}

