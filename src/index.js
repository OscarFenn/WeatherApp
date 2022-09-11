import weather from "../modules/weather";


document.querySelector(".search button")
.addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search-bar")
.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();  
    }
});


weather.fetchWeather("Orlando");
