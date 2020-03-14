function OpenLink(link)
{
    window.location=link;
}

async function GetWeatherInfo(cityID)
{
    var apiKey = '4154b83dc3fae98323d99f1e62f85872';
    var url = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${apiKey}`;

    await fetch(url)
    .then(function(resp) { return resp.json() })
    .then(function(data) {
        document.getElementById("PasvalysCity").innerText = `${data.name} ${(data.main.temp - 273.15)} C`;
        console.log(data)
    });
}