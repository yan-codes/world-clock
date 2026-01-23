function updateTime() {
  let jerusalemElement = document.querySelector("#jerusalem");
  let jerusalemDateElement = jerusalemElement.querySelector(".date");
  let jerusalemTimeElement = jerusalemElement.querySelector(".time");
  jerusalemTime = moment().tz("Asia/Jerusalem");

  jerusalemDateElement.innerHTML = jerusalemTime.format("MMMM Do YYYY");
  jerusalemTimeElement.innerHTML = jerusalemTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
