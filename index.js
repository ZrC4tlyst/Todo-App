
/*//
const todos = [{
    title: "Get groceries",
    dueDate: "02-05-2023"
}, {
    title: "wash car",
    dueDate: "04-05-2023"
},
{
    title: "Make dinner",
    dueDate: "05-05-2023"
}];

render();


function addTodo() {
    const textBox = document.getElementById("todo-title");
    const title = textBox.value;

    const datePicker = document.getElementById("date-picker");
    const dueDate = datePicker.value;
    todos.push({
        title: title,
        dueDate: dueDate
    });

    render();
}

function render() {
    document.getElementById("todo-list").innerHTML = "";

    todos.forEach(function (todo) {
        const element = document.createElement("div");
        element.innerText = `${todo.title} is due on this date ${todo.dueDate}`;
        let todoList = document.getElementById("todo-list");
        todoList.appendChild(element);
    });
}
*///
