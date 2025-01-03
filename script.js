const apiKey = "b5930bb039854671596bb7b17b4ac715";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox = document.querySelector(".searchbar");
const searchButton = document.querySelector(".searchbutton");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".degreecentigrade").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + " %";
    document.querySelector(".windspeed").innerHTML = Math.round(data.wind.speed) + " km/h";
    


    
}

searchButton.addEventListener("click", () => { checkWeather(searchbox.value) });
