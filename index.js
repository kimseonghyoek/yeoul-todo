var dates = document.getElementById("time");
var userName = document.getElementById("user-name");
var todolist = document.getElementById("todo-list");
var todoForm = document.getElementById("add-todo");
var todoInput = document.getElementById("todo-inputs")

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

  btn.innerText = "❌";
};

function HandleSubmit(event) {
  event.preventDefault();
  value = todoInput.value;
};

function Form() {
  todoForm.addEventListener("submit", HandleSubmit);
};

Form();

DrawName();
init();