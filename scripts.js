let weather = {
  apikey :"823eb75d2df54ef8de7bf4c05a861546",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q="
      + city 
      + "&units=metric&appid="
      + this.apikey
    )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
  },
 displayWeather: function(data)
 {
   if(data.message=="city not found")
   {
    document.querySelector(".message").style="display:block";
     document.querySelector(".message").innerText="City not Found";
     document.querySelector(".weather").style="display:none";
   }

   else{
  
    document.querySelector(".weather").style="display:block";
    document.querySelector(".message").style="display:none";
    
   const {name}=data;
   const{icon,description}=data.weather[0];
   const{temp,humidity}=data.main;
   const{speed}=data.wind;
   console.log(name,icon,description,temp,humidity,speed);
   document.querySelector(".city").innerText = "Weather in " + name;
   document.querySelector(".icon").src="http://openweathermap.org/img/wn/" + icon + ".png";
   document.querySelector(".description").innerText = description;
   document.querySelector(".temp").innerText = temp + "°C";
   document.querySelector(".humidity").innerText= "Humidity: " + humidity + "%";
   document.querySelector(".wind").innerText= "Wind Speed: " + speed + "km/h";
   }

  },
  search: function(){
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
};
document.querySelector(".search button").addEventListener("click",function(){
weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup",function(e){
  if(e.keyCode===13)
  {
    weather.search();
  }
});
weather.fetchWeather("Dehradun");