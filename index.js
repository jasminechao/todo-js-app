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
        console.log(i + 1 + ": ", this.todos[i]);
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

  toggleTodos: function() {
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
  }

  // changeTodo
  // deleteTodo
};
