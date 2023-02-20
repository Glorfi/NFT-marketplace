let hoursItem = document.querySelector("#hoursItem");
let minutesItem = document.querySelector("#minutesItem");
let secondsItem = document.querySelector("#secondsItem");

setInterval(function time() {
  let d = new Date();
  let hours = 24 - d.getHours();
  if ((hours + "").length == 1) {
    hours = "0" + hours;
  }
  let min = 60 - d.getMinutes();
  if ((min + "").length == 1) {
    min = "0" + min;
  }
  let sec = 60 - d.getSeconds();
  if ((sec + "").length == 1) {
    sec = "0" + sec;
  }
  hoursItem.textContent = hours;
  minutesItem.textContent = min;
  secondsItem.textContent = sec;
});
