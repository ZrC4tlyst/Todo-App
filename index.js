
///*//
let todos = [{
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

render();


function addTodo() {
    const textBox = document.getElementById("todo-title");
    const title = textBox.value;

    const datePicker = document.getElementById("date-picker");
    const dueDate = datePicker.value;
    const id = new Date().getTime();

    todos.push({
        title: title,
        dueDate: dueDate,
        id: id

    });

    render();
}

function deleteTodo(event) {
    const deleteBtn = event.target;
    const idToDelete = Number(deleteBtn.id);

    todos = todos.filter(function (todo) {
        // if the id of this todo matches id to delete then we are going to return false. For everything else return true.
        if (todo.id === idToDelete) {
            return false;
        }
        else {
            return true;
        }
    });

    render();
}


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
