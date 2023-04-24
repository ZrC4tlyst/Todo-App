
///*//

//Model
// if local storage has a todos array then use it. Otherwise use default array.

let todos;

// retrieve local storage
const savedTodos = JSON.parse(localStorage.getItem('todos'));

// check if it is an array
if (Array.isArray(savedTodos)) {
    todos = savedTodos;
}
else {
    todos = [{
        title: "Get groceries",
        dueDate: "02-05-2023",
        id: 1
    }, {
        title: "wash car",
        dueDate: "04-05-2023",
        id: 2
    },
    {
        title: "Make dinner",
        dueDate: "05-05-2023",
        id: 3
    }];
}



// Code that creates a todo

function createTodo(title, dueDate) {
    const id = new Date().getTime();

    todos.push({
        title: title,
        dueDate: dueDate,
        id: id
    });
    saveTodos();
}


// deletes a todo
function removeTodo(idToDelete) {
    todos = todos.filter(function (todo) {
        // if the id of this todo matches id to delete then we are going to return false. For everything else return true.
        if (todo.id === idToDelete) {
            return false;
        }
        else {
            return true;
        }
    });
    saveTodos();
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

render();



//Controller 

function addTodo() {
    const textBox = document.getElementById("todo-title");
    const title = textBox.value;

    const datePicker = document.getElementById("date-picker");
    const dueDate = datePicker.value;

    createTodo(title, dueDate);

    render();
}

function deleteTodo(event) {
    const deleteBtn = event.target;
    const idToDelete = Number(deleteBtn.id);
    removeTodo(idToDelete);
    render();
}

// View

function render() {
    document.getElementById("todo-list").innerHTML = "";

    todos.forEach(function (todo) {
        const element = document.createElement("div");
        element.innerText = `${todo.title} is due on this date ${todo.dueDate}`;
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.style = "margin-left: 20px"
        deleteBtn.onclick = deleteTodo;
        deleteBtn.id = todo.id;
        element.appendChild(deleteBtn);
        let todoList = document.getElementById("todo-list");
        todoList.appendChild(element);
    });
}
//*///
