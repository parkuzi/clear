const controller = {};

getWeather.controller = 
    const { city } = req.body;
    fetch(`http://api.weatherapi.com/v1/current.json?key=a05aff9f0fff4f9299e03909222204&q=${city}&aqi=no`)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}