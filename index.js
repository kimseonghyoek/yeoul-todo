var dates = document.getElementById("time");
var userName = document.getElementById("user-name");

function Clock() {
  var date = new Date();

  var hours = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();

  dates.innerText = `${hours}:${min < 10 ? `0${min
  }` : `${min}`}:${sec < 10 ? `0${sec}` : `${sec}`}`;
}

function init() {
  Clock();
  setInterval(Clock, 1000);
}

function DrawName() {
  var name = localStorage.getItem("User");
  userName.innerText = `Welcome, ${name}`
}

DrawName();
init();