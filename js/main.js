let searchInput = document.querySelector(".search input")

let dateInNav = document.querySelector(".dateInNav")

let currentDay = document.querySelector(".card-one #day")
let currentDate = document.querySelector(".card-one #date")
let currentLocation = document.querySelector(".card-one #location")
let currentDegree = document.querySelector(".card-one #degree")
let currentStatusImg = document.querySelector(".card-one #status-img")
let currentStatus = document.querySelector(".card-one #status")
let currentWindDegree = document.querySelector(".card-one #wind-degree")
let currentWindKm = document.querySelector(".card-one #wind-km")
let currentWindDir = document.querySelector(".card-one #wind-dir")

let nextDay = document.querySelectorAll(".card-next .day")
let nextDate = document.querySelectorAll(".card-next .date")
let nextDayImg = document.querySelectorAll(".card-next img")
let maxDegree = document.querySelectorAll(".card-next .max-degree")
let minDegree = document.querySelectorAll(".card-next .min-degree")
let nextDayStatus = document.querySelectorAll(".card-next .status")

let apiResponse;
let responseData;
let date = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "saturday",
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let currentValue = 'Cairo';





async function getWeatherData() {
  apiResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=a789ddb09fe74c5b99383944220809&q=${currentValue}&days=3`);
  responseData = await apiResponse.json()
  displayTodayWeather()
  displayNextDayWeather()
}
getWeatherData()


function displayTodayWeather() {
  currentDay.innerHTML = days[date.getDay()]
  currentDate.innerHTML = `${date.getDate()} ${months[date.getMonth()]}`
  currentLocation.innerHTML = `${responseData.location.name}, ${responseData.location.country}`
  currentDegree.innerHTML = `${responseData.current.temp_c}&deg;C`
  currentStatusImg.src = `https:${responseData.current.condition.icon}`
  currentStatus.innerHTML = responseData.current.condition.text
  currentWindDegree.innerHTML = responseData.current.wind_degree
  currentWindKm.innerHTML = `${responseData.current.wind_kph}km/h`
  currentWindDir.innerHTML = responseData.current.wind_dir
  dateInNav.innerHTML = responseData.forecast.forecastday[0].date;
}

function displayNextDayWeather() {
  for (let i = 0; i < 2; i++) {
    let date = new Date(responseData.forecast.forecastday[i + 1].date.split("-").join(" "));
    nextDay[i].innerHTML = days[date.getDay()];
    nextDate[i].innerHTML = `${date.getDate()} ${months[date.getMonth()]}`;
    nextDayImg[i].src = `https:${responseData.forecast.forecastday[i + 1].day.condition.icon}`;
    maxDegree[i].innerHTML = `${responseData.forecast.forecastday[i + 1].day.maxtemp_c}&deg;C`;
    minDegree[i].innerHTML = `${responseData.forecast.forecastday[i + 1].day.mintemp_c}&deg;C`;
    nextDayStatus[i].innerHTML = responseData.forecast.forecastday[i + 1].day.condition.text;
  }
}


searchInput.addEventListener("keyup", (e) => {
  currentValue = e.target.value
  if (currentValue == "") {
    getWeatherData()
  }
  getWeatherData()
})



// Nav Bar
let navBar = document.querySelector(".navbar")
window.onscroll = function () {
  if (scrollY > 100) {
    navBar.style.backgroundColor = "rgb(9, 0, 44)"
  } else {
    navBar.style.backgroundColor = "transparent"
  }
}









// main section
let main = document.getElementById("main")
let stars = document.getElementById("stars")
let moon = document.getElementById("moon")
let mountains1 = document.getElementById("mountains1")
let mountains2 = document.getElementById("mountains2")
let river = document.getElementById("river")
let boat1 = document.getElementById("boat1")
let weather = document.querySelector(".weather")
let content = document.querySelector(".content")

weather.style.display = "none"
window.addEventListener("scroll", () => {
  let scrollValue = scrollY
  stars.style.left = scrollValue * 2 + "px"
  if (scrollY == 0) {
    moon.style.top = "-70px"

  } else {
    moon.style.top = scrollValue * 3 + "px"

  }
  mountains1.style.top = scrollValue * 2 + "px"
  mountains2.style.top = scrollValue * 1.5 + "px"
  river.style.top = scrollValue + "px"
  boat1.style.top = scrollValue + "px"
  boat1.style.left = scrollValue * 2 + "px"
  weather.style.fontSize = scrollValue + "px"
  if (scrollY > 50) {
    weather.style.display = "block"
  } else {
    weather.style.display = "none"
  }
  if (scrollValue >= 60) {
    weather.style.fontSize = 60 + "px"
    weather.style.position = "fixed"
  }
  if (scrollY >= window.innerHeight - 300) {
    weather.style.display = "none"
  } else {
    weather.style.display = "block"
  }
  if (scrollY >= 142) {
    main.style.background = "linear-gradient(to top, #376281, #10001f)"
  } else {
    main.style.background = "linear-gradient(to top, #200016, transparent)"
  }
})