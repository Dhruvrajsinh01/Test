// Get the necessary HTML elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoListContainer = document.getElementById('todo-list');

// Create an empty 2D array to store the to-do items
let todoList = [];

// Function to add a new to-do item
function addTodoItem(item, priority) {
    todoList.push([item, priority]);
}

// Function to remove a to-do item by its index
function removeTodoItem(index) {
    if (index >= 0 && index < todoList.length) {
        todoList.splice(index, 1);
    }
}

// Function to display the to-do list
function displayTodoList() {
    todoListContainer.innerHTML = '';

    if (todoList.length === 0) {
        const emptyItem = document.createElement('li');
        emptyItem.textContent = 'Todo list is empty.';
        todoListContainer.appendChild(emptyItem);
    } else {
        for (let i = 0; i < todoList.length; i++) {
            const item = document.createElement('li');
            item.className = 'todo-item';

            const prioritySpan = document.createElement('span');
            prioritySpan.textContent = `[${todoList[i][1]}]`;

            const taskSpan = document.createElement('span');
            taskSpan.textContent = todoList[i][0];

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.addEventListener('click', () => {
                removeTodoItem(i);
                displayTodoList();
            });

            item.appendChild(prioritySpan);
            item.appendChild(taskSpan);
            item.appendChild(removeBtn);

            todoListContainer.appendChild(item);
        }
    }
}

// Add button click event listener
addBtn.addEventListener('click', () => {
    const task = todoInput.value;
    if (task !== '') {
        addTodoItem(task, ' ');
        displayTodoList();
        todoInput.value = '';
    }
});

// Initial display of the to-do list
displayTodoList();
