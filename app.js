const apiKey = "7e298ea2339af78c3181866e48f3d9ba";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=";
const searchBox = document.querySelector (".weather-search input ");
const searchBtn = document.querySelector (".weather-search button");

const fToC = document.querySelector(".clickFToC button");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature-header").innerHTML = Math.round(data.main.temp) +"°";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".viento").innerHTML = Math.round(data.wind.speed)+" mph";
 

}



searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);

})



 
