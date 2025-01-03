const apiKey = "b5930bb039854671596bb7b17b4ac715";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox = document.querySelector(".searchbar");
const searchButton = document.querySelector(".searchbutton");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    console.log(document.querySelector("#weatherpic"));
    

    document.querySelector(".degreecentigrade").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + " %";
    document.querySelector(".windspeed").innerHTML = Math.round(data.wind.speed) + " km/h";
    
 if(data.weather[0].main == "Clouds"){
    document.querySelector(".weatherimage").src = "images/clouds.png"
 }
 else if(data.weather[0].main == "Clear"){
    document.querySelector(".weatherimage").src = "images/clear.png"
 } else if(data.weather[0].main == "Drizzle"){
    document.querySelector(".weatherimage").src = "images/drizzle.png"
 }else if(data.weather[0].main == "Mist"){
    document.querySelector(".weatherimage").src = "images/mist.png"
 }else if(data.weather[0].main == "Rain"){
    document.querySelector(".weatherimage").src = "images/rain.png"
 }else if(data.weather[0].main == "Snow"){
    document.querySelector(".weatherimage").src = "images/snow.png"
 }else {
    document.querySelector(".weatherimage").src = "images/wind.png"
 }

    
 }

searchButton.addEventListener("click", () => { checkWeather(searchbox.value) });
