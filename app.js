function clock() {
  const hour = document.getElementById("hr");
  const minute = document.getElementById("mn");
  const second = document.getElementById("sc");

  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (hours < 10) {
    hour.innerHTML = "0" + hours;
  } else {
    hour.innerHTML = hours;
  }
  if (minutes < 10) {
    minute.innerHTML = "0" + minutes;
  } else {
    minute.innerHTML = minutes;
  }
  if (seconds < 10) {
    second.innerHTML = "0" + seconds;
  } else {
    second.innerHTML = seconds;
  }
}

var interval = setInterval(clock, 1000);
