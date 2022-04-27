import express from 'express';
import fetch from "node-fetch";


const app = express();
const PORT = 9000;

app.use(express.json({ limit: "50mb" }));

app.get("/weather", async (req, res) => {

    const { city } = req.body;
    const theWeather = await fetch(`http://api.weatherapi.com/v1/current.json?key=a05aff9f0fff4f9299e03909222204&q=${city}&aqi=no`)
    const theWaetherFormatted = await theWeather.json();

    return res.status(200).json(theWaetherFormatted);
});


app.use("/*", (req, res) => {
    console.log('User entered an unknown route')
  return res.status(404).json({
    success: "false",
    message: "Page not found",
    error: {
      statusCode: 404,
      message: "You reached a route that is not defined on this server",
    },
  });
});

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port: ", PORT);
});