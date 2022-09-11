let weather = {
    apiKey: "bea2110c8ad64a36bf6ad3a7b3559148",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, feels_like, humidity} = data.main;
        const {speed} = data.wind;

        document.querySelector(".city").innerText = name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temperature").innerText = temp + "°F";
        document.querySelector(".feelslike").innerText = "Feels like " + feels_like + "°F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
        document.querySelector(".card-img-bottom").src =
      "https://source.unsplash.com/1600x900/?" + name + "";
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

export default weather;



