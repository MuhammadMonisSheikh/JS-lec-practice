var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
    // HANDLE INPUT

    if (input === "list") {
        ListTodo();

    } else if (input === "new") {
        addTodo();
    } else if (input === "delete") {
        deleteTodo();
    }

    // ASK AGAIN FOR NEW INPUT

    input = prompt("What would you like to do?");
}
console.log("OK, YOU QUITE THE APP");

function ListTodo() {
    console.log("**********")
    todos.forEach(function(todo, i) {
        console.log(i + ":" +
            todo);
    });
    console.log("**********")

}


function addTodo() {
    // Ask for New todos
    var newTodo = prompt("Enter new todo");
    // Add to todos array
    todos.push(newTodo);
    console.log("Added Todo");

}

function deleteTodo() {
    // ASK for Index of TODO to be DELETED
    var index = prompt("Enter Index of Todo to delete");
    // DELETE that Todo
    // splice()
    todos.splice(index, 1);
    console.log("Deleted Todo");

}