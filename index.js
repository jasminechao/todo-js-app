let todoList = {
  todos: [
    {
      todoText: "Buy oatmilk",
      completed: false
    },
    {
      todoText: "Change bike tires",
      completed: false
    },
    {
      todoText: "Prep sourdough bread",
      completed: false
    },
    {
      todoText: "Build js todo app",
      completed: true
    }
  ],

  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("Empty list");
    } else {
      let todosUl = document.getElementById("todo-list");
      todosUl.innerHTML = "";
      for (let i = 0; i < this.todos.length; i++) {
        let todoItem = document.createElement("li");
        todoItem.id = i;
        let label = document.createElement("label");
        label.innerHTML = this.todos[i].todoText;
        let checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.className = "form-check-input";
        checkbox.checked = this.todos[i].completed;

        let deleteSpan = document.createElement("span");
        deleteLink = document.createElement("a");
        deleteLink.className = "deleteLink";
        deleteIcon = document.createElement("i");
        deleteIcon.className = "fas fa-trash";
        deleteLink.appendChild(deleteIcon);
        deleteSpan.appendChild(deleteLink);

        let editSpan = document.createElement("span");
        editLink = document.createElement("a");
        editLink.className = "editLink";
        editIcon = document.createElement("i");
        editIcon.className = "fas fa-pencil";
        editLink.appendChild(editIcon);
        editSpan.appendChild(editLink);

        label.prepend(checkbox);
        todoItem.appendChild(label);
        todoItem.appendChild(deleteSpan).append(editSpan);

        todosUl.appendChild(todoItem);
      }
    }
  },

  addTodos: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },

  showCompleted: function() {
    let completed = [];
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].completed) {
        completed.push(this.todos[i].todoText);
        console.log(completed);
      }
    }
    if (completed.length < 1) {
      console.log("You havent completed any todos");
    }
  },

  toggleCompleted: function(position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },

  toggleAll: function() {
    let totalTodos = this.todos.length;
    let completedTodos = 0;

    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].completed) {
        completedTodos++;
      }
    }

    if (totalTodos === completedTodos) {
      for (let i = 0; i < this.todos.length; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for (let i = 0; i < this.todos.length; i++) {
        this.todos[i].completed = true;
      }
    }

    this.displayTodos();
  },

  changeTodos: function(position, newTodoText) {
    this.todos[position] = {
      todoText: newTodoText,
      completed: false
    };
    this.displayTodos();
  },

  deleteTodos: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};

let displayButton = document.getElementById("displayButton");
let toggleButton = document.getElementById("toggleButton");
let addButton = document.getElementById("addButton");

let handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
  },
  addTodos: function() {
    let todoInput = document.getElementById("todoInput");

    let todoText = todoInput.value;
    todoList.addTodos(todoText);
  }
};

window.onload = function() {
  todoList.displayTodos();
};

document.addEventListener("click", function(e) {
  let position = e.target.closest("li").id;
  if (e.target.className === "fas fa-trash") {
    todoList.deleteTodos(position);
  }
  if (e.target.className === "fas fa-pencil") {
    let todoItem = e.target.closest("li");
    let editTodoInput = document.createElement("input");
    editTodoInput.id = "editTodoInput";
    editTodoInput.type = "text";

    let updateButton = document.createElement("button");
    updateButton.innerHTML = "Update";
    updateButton.className = "btn btn-secondary";

    todoItem.append(editTodoInput);
    todoItem.append(updateButton);

    updateButton.addEventListener("click", function() {
      let editTodoText = document.getElementById("editTodoInput");
      let newTodoText = editTodoText.value;
      todoList.changeTodos(position, newTodoText);
    });

  }
});