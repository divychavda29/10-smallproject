const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

// Using OpenWeatherMap's free "demo" API key (works for limited requests)
const apiKey = "439d4b804bc8187953eb36d2a8c26a02";

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim() || "London"; // fallback to London
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiURL)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found 😢");
      }
      return response.json();
    })
    .then(data => {
      const html = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>🌡️ Temp: ${data.main.temp}°C</p>
        <p>🌥️ Weather: ${data.weather[0].main}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
      `;
      weatherResult.innerHTML = html;
    })
    .catch(error => {
      weatherResult.innerHTML = `<p>${error.message}</p>`;
    });
});
