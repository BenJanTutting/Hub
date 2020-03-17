function OpenLink(link)
{
    window.location = link;
}

const apiKey = '4154b83dc3fae98323d99f1e62f85872';

async function ShowWeatherModal(cityName)
{
    OpenModal();

    var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    var request = new XMLHttpRequest();
    
    request.open('GET', url);
    request.onload = function()
    {
        var weatherData = JSON.parse(request.responseText);
        console.log(weatherData);
        renderModel(weatherData);
    }
    request.send();
}

function renderModel(weatherData)
{
    var iconLink = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    var iconElement = document.getElementById("weatherIcon");
    var temperatureElement = document.getElementById("temperature");
    var descriptionElement = document.getElementById("description");
    var locationElement = document.getElementById("location");

    iconElement.setAttribute("src", iconLink);
    temperatureElement.innerText = `${(weatherData.main.temp - 273.15).toPrecision(1)} °C`;
    descriptionElement.innerText = `${weatherData.weather[0].description}`;
    locationElement.innerText = `${weatherData.name}`;
}

function OpenModal() {
    var overlay = document.getElementById('overlay');
    var modal = document.getElementById('singleCityWeatherModal');

    modal.classList.add('active');
    overlay.classList.add('active');
}

function CloseModal() {
    var overlay = document.getElementById('overlay');
    var modal = document.getElementById('singleCityWeatherModal');

    modal.classList.remove('active');
    overlay.classList.remove('active');
}
