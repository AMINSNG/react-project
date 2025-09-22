document.addEventListener("DOMContentLoaded", () => {
  let todos = [
    { id: 1, title: "Design use case page", isCompleted: true },
    { id: 2, title: "Design sign up flow", isCompleted: false },
    { id: 3, title: "Test Wireframe", isCompleted: false },
  ];

  const todoContainer = document.getElementById("todo-container");
  const addForm = document.getElementById("add-form");
  const addInput = document.getElementById("add-input");

  const renderTodos = () => {
    todoContainer.innerHTML = "";
    todos.forEach((todo) => {
      const todoItem = createTodoItem(todo);
      todoContainer.appendChild(todoItem);
    });
  };

  const createTodoItem = (todo) => {
    const div = document.createElement("div");
    div.className = "todo-item";
    div.dataset.id = todo.id;
    if (todo.isCompleted) {
      div.classList.add("completed");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.isCompleted;

    const h2 = document.createElement("h2");
    h2.className = "title";
    h2.textContent = todo.title;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";

    div.appendChild(checkbox);
    div.appendChild(h2);
    div.appendChild(deleteButton);

    return div;
  };

  const addTodo = (title) => {
    const newTodo = {
      id: todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1,
      title: title,
      isCompleted: false,
    };
    todos.push(newTodo);
    const todoItem = createTodoItem(newTodo);
    todoContainer.appendChild(todoItem);
  };

  addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = addInput.value.trim();
    if (title) {
      addTodo(title);
      addInput.value = "";
    }
  });

  todoContainer.addEventListener("click", (e) => {
    const target = e.target;
    const todoItem = target.closest(".todo-item");
    if (!todoItem) return;

    const todoId = Number(todoItem.dataset.id);

    if (target.type === "checkbox") {
      const todo = todos.find((t) => t.id === todoId);
      todo.isCompleted = target.checked;
      todoItem.classList.toggle("completed", target.checked);
    }

    if (target.classList.contains("delete-btn")) {
      todos = todos.filter((t) => t.id !== todoId);
      todoItem.remove();
    }
  });

  renderTodos();
});
