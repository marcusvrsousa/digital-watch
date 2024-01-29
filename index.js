function watch() {
  let hour = document.getElementById("hour");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");

  let date = new Date();

  hour.textContent =
    date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  //   hour.textContent = date.getHours();
  minutes.textContent = date.getMinutes();
  seconds.textContent = date.getSeconds();
}

setInterval(watch, 1);
