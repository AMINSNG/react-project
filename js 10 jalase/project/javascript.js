const todos = [
  { tittle: "Design sign up flow", isCompleted: false },
  { tittle: "Design use case page", isCompleted: true },
  { tittle: "Test Wireframe", isCompleted: false },
];

const todo_container = document.getElementById("todo-container");

for (const element of todos) {
  const h2 = document.createElement("h2");
  h2.innerText = element.tittle;
  const checkbox = document.createElement("input")
  checkbox.type="checkbox"
  checkbox.checked=element.isCompleted
  const div = document.createElement("div")
  div.appendChild(checkbox);
  div.appendChild(h2)
  todo_container.appendChild(div);
  div.className="item_container"



}

function add(){
  const input = document.getElementById("add-input");
  console.log(input.value)

    const h2 = document.createElement("h2");
    h2.innerText = input.value
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = false;
    const div = document.createElement("div");
    div.appendChild(checkbox);
    div.appendChild(h2);
    todo_container.appendChild(div);
    div.className = "item_container";

}