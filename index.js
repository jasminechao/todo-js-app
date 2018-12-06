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
        let todoLi = document.createElement("li");

        let todoGroup = document.createElement("div");
        todoGroup.className = "form-check";
        let label = document.createElement("label");
        label.innerHTML = this.todos[i].todoText;
        let checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.className = "form-check-input";
        checkbox.checked = this.todos[i].completed;

        label.prepend(checkbox);
        todoGroup.appendChild(label);

        todosUl.appendChild(todoGroup);
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
    // if (todoInput.classList.contains("hidden")) {
    //   todoInput.classList.remove("hidden");
    //   let todoText = todoInput.value;
    //   addButton.addEventListener("click", function() {
    //     todoList.addTodos(todoText);
    //   });
    // }
  }
};

window.onload = function() {
  todoList.displayTodos();
};
