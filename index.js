function watch() {
  let hour = document.getElementById("hour");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");

  let date = new Date();

  hour.textContent =
    date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  minutes.textContent =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  seconds.textContent =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
}

setInterval(watch, 1);
