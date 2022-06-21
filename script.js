function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  city.cityElement.innerHTML = response.data.name;
}

let apiKey = "9ab263aeda80761b2d763070436d8afb";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}d&units=Imperial`;

let city = "west covina";
axios.get(apiUrl).then(displayTemperature);