var dates = document.getElementById("time");
var userName = document.getElementById("user-name");
var todoList = document.getElementById("todo-list");
var todoForm = document.getElementById("add-todo");
var todoInput = document.getElementById("todo-inputs");

function Clock() {
  var date = new Date();

  var hours = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();

  dates.innerText = `${hours}:${min < 10 ? `0${min
  }` : `${min}`}:${sec < 10 ? `0${sec}` : `${sec}`}`;
};

function init() {
  Clock();
  setInterval(Clock, 1000);
};

function DrawName() {
  var name = localStorage.getItem("User");
  userName.innerText = `Welcome, ${name}`
};

function AddTodo(todo) {
  var li = document.createElement('li');
  var span = document.createElement("span");
  var p = document.createElement("p");
  var btn = document.createElement("button");

  li.id = todo.id;
  p.innerText = todo.text;
  btn.innerText = "❌";
  li.appendChild(span);
  span.appendChild(p);
  span.appendChild(btn);
  todoList.appendChild(li);
};

function HandleSubmit(event) {
  event.preventDefault();
  value = todoInput.value;

  const newTodoObj = {
    text: value,
    id: 1
  }

  localStorage.setItem("todo-list", newTodoObj.text);
  AddTodo(newTodoObj);
  todoInput.value = "";
};

function Form() {
  todoForm.addEventListener("submit", HandleSubmit);
};

Form();

function getTodo() {
  const newTodoObj = {
    text: value,
    id: 1
  }
  localStorage.getItem("todo-list");
  AddTodo(newTodoObj); 
}

function delTodo(todoid) {
  // document.getElementById(todoid.id)
}

DrawName();
init();
getTodo();