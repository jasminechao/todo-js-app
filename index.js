var todoList = {
  todos: [
    {
      todoText: "item 1",
      completed: false
    },
    {
      todoText: "item 2",
      completed: true
    },
    {
      todoText: "item 3",
      completed: false
    },
    {
      todoText: "item 4",
      completed: false
    }
  ],

  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("Empty list");
    } else {
      for (let i = 0; i < this.todos.length; i++) {
        let todosUl = document.getElementById("todo-list");
        let todoLi = document.createElement("li");

        todoLi.textContent =
          this.todos[i].todoText + ", completed: " + this.todos[i].completed;

        todosUl.appendChild(todoLi);
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
