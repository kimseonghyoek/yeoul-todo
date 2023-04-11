var form = document.getElementById("set-user-name");
var inputValue = document.getElementById("inputs");

function HandleSubmit(event) {
  event.preventDefault();
  value = inputValue.value;
  SetUserName(value);
  location.href = "index.html";
}

function SetUserName(text) { 
  localStorage.setItem("User", text);
} 

function InputForm() {
  form.addEventListener("submit", HandleSubmit);
}

InputForm();