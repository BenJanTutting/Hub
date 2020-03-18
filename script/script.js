const apiKey = '4154b83dc3fae98323d99f1e62f85872';

async function ShowWeatherModal(cityName)
{
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    var request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = function()
    {
        if(request.status >= 200 && request.status < 400)
        {
            OpenModal('singleCityWeatherModal');
            var weatherData = JSON.parse(request.responseText);

            console.log(weatherData);
            renderModal(weatherData);
        }
    }

    request.onerror = function()
    {
        OpenModal('errorModal');
        var errorModal = document.getElementById("errorModal");
        errorModal.innerText = "Check your internet connection and try again";
    }

    request.send();
}

function renderModal(weatherData)
{
    var iconElement = document.getElementById("weatherIcon");
    var descriptionElement = document.getElementById("description");
    var temperatureElement = document.getElementById("temperature");
    var feelsLikeTemperatureElement = document.getElementById("feelsLikeTemperature");
    var windElement = document.getElementById("wind");
    var locationElement = document.getElementById("location");

    iconElement.setAttribute("src", `../weather-icons/${weatherData.weather[0].icon}.png`);
    descriptionElement.innerText = `${weatherData.weather[0].description}`;
    temperatureElement.innerText = `Temperature: ${formatTemperatureData(weatherData, "temp")}`;
    feelsLikeTemperatureElement.innerText = `Feels Like: ${formatTemperatureData(weatherData, "feels_like")}`;
    windElement.innerText = `Wind: ${FormatWindData(weatherData)}`;
    locationElement.innerText = `${weatherData.name}`;
}

function formatTemperatureData(weatherData, property)
{
    return `${Number(weatherData.main[property] - 273.15).toFixed(0)} °C`
}

function FormatWindData(weatherData)
{
    var degrees = weatherData.wind.deg;
    var windSpeed = Number(weatherData.wind.speed).toFixed(1);

    if(degrees > 337.5 || degrees <= 22.5) return `← ${windSpeed} m/s`;
    if(degrees <= 67.5) return `↙ ${windSpeed} m/s`;
    if(degrees <= 112.5) return `↓ ${windSpeed} m/s`;
    if(degrees <= 157.5) return `↘ ${windSpeed} m/s`;
    if(degrees <= 202.5) return `→ ${windSpeed} m/s`;
    if(degrees <= 247.5) return `↗ ${windSpeed} m/s`;
    if(degrees <= 292.5) return `↑ ${windSpeed} m/s`;
    if(degrees <= 337.5) return `↖ ${windSpeed} m/s`;
}

function OpenModal(modalID)
{
    var overlay = document.getElementById('overlay');
    var modal = document.getElementById(modalID);

    modal.classList.add('active');
    overlay.classList.add('active');
}

function CloseModal() {
    var overlay = document.getElementById('overlay');
    var weatherModal = document.getElementById('singleCityWeatherModal');
    var errorModal = document.getElementById('errorModal');

    overlay.classList.remove('active');
    if(weatherModal.classList.contains('active')) weatherModal.classList.remove('active');
    if(errorModal.classList.contains('active')) errorModal.classList.remove('active');
}