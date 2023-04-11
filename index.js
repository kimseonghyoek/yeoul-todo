var dates = document.getElementById("time");

function Clock() {
  var date = new Date();

  var hours = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();

  dates.innerText = `${hours}:${min < 10 ? `0${min
  }` : `${min}`}:${sec < 10 ? `0${sec}` : `${sec}`}`;
}

function SetUserName() {
  var nameSpace = document.getElementById("user-name");
  
}

function init() {
  Clock();
  setInterval(Clock, 1000);
}

init();