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

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
     <div class="city">
       <div>
          <h2>${cityName}</h2>
           <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
          <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
     </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
