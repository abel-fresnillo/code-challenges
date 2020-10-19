class TodoItem {
    id;
    description;

    constructor(id, description) {
        this.id = id;
        this.description = description;
    }
}

const todoList = [];

const addItem = (id, description) => {
    todoList.push(new TodoItem(id, description));
}

const deleteItem = (id) => {
    let removeIndex = todoList.indexOf(id);
    todoList.splice(removeIndex - 1, 1);
}

const listItems = () => {
    todoList.forEach(e => console.log(e.id + " " + e.description));
}

addItem(1, "Item 1");
addItem(2, "Item 2");
addItem(3, "Item 3");
addItem(4, "Item 4");

deleteItem(3);

listItems();