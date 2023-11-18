const apiKey = "7e298ea2339af78c3181866e48f3d9ba";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=";
const searchBox = document.querySelector (".weather-search input ");
const searchBtn = document.querySelector (".weather-search button");

var fToC = document.querySelector(".clickFToC");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature-header").innerHTML = Math.round(data.main.temp) +"°";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".viento").innerHTML = Math.round(data.wind.speed)+" mph";
 

}


// Le dan click al icono
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);

})


// Apretar enter
 searchBox.addEventListener('keydown',(event)=> {
    if(event.key ==='Enter'){
        checkWeather(searchBox.value)
    }

 })


//  Cambiar metrica

function toggleText(fToC){
    var texto = fToC.textContent || fToC.innerText;
    if(texto == "Celcius | kph"){
        fToC.innerTextL = 'Farenheit | mph'
    } else {
        fToC.innerText = "Celcius | kph";
    }
}


// function changeText(event){
//    event.innerHTML = "Farenheit | mph";
    
// }onclick="changeText(this)"

