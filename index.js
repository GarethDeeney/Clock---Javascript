// jshint esversion:6




function setTime() {
  var date = new Date();
  var hours = document.querySelector(".hours");
  var minutes = document.querySelector(".minutes");
  var seconds = document.querySelector(".seconds");
  var nowHours = date.getHours();
  var nowMinutes = date.getMinutes();
  var nowSeconds = date.getSeconds();
  var timeOfDay = document.querySelector(".timeOfDay");

  hours.innerHTML = nowHours;
  minutes.innerHTML = nowMinutes;
  seconds.innerHTML = nowSeconds;
  setTimeout(setTime, 1000);

  if (hours < 12) {
    timeOfDay.innerHTML = "AM";
  } else if (hours >= 12) {
    timeOfDay.innerHTML = "PM";
  }
  if (nowSeconds < 9)
  {
    minutes.innerHTML = "0" + nowSeconds;
  }
  if (nowMinutes < 9)
  {
    minutes.innerHTML = "0" + nowMinutes;
  }
  if (nowMinutes < 9)
  {
    minutes.innerHTML = "0" + nowMinutes;
  }
}

setTime();
