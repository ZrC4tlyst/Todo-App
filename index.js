
let todos = ["get groceries", "wash car", "Make dinner"];

render();


function addTodo() {
    let textBox = document.getElementById("todo-title");
    let title = textBox.value;
    todos.push(title);

    render();
}

function render() {


    todos.forEach(function (todoTitle) {
        let element = document.createElement('div');
        element.id = "container;"
        document.body.appendChild(element);
        element.innerText = todoTitle;
        let todoList = document.getElementById('todo-List');
        todoList.appendChild(element);
    });
}