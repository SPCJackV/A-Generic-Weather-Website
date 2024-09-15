async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '3746ad9b2aeb953b117a94ca8d578e56'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found');
        
        const data = await response.json();
        const weatherDiv = document.getElementById('weather');
        weatherDiv.innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
    } catch (error) {
        alert(error.message);
    }
}

const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

weatherDiv.innerHTML = `
    <h2>${data.name}</h2>
    <img src="${weatherIcon}" alt="${data.weather[0].description}">
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Weather: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
`;

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}


async function getWeatherByCoords(lat, lon) {
    const apiKey = '3746ad9b2aeb953b117a94ca8d578e56';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const weatherDiv = document.getElementById('weather');
        const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        weatherDiv.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${weatherIcon}" alt="${data.weather[0].description}">
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
    } catch (error) {
        alert('Failed to retrieve weather data');
    }
}

async function getWeatherByCoords(lat, lon) {
    const apiKey = '104826117247797';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const weatherDiv = document.getElementById('weather');
        const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        weatherDiv.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${weatherIcon}" alt="${data.weather[0].description}">
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
    } catch (error) {
        alert('Failed to retrieve weather data');
    }
}

function loadWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            getWeatherByCoords(latitude, longitude);
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}

window.onload = loadWeather;


async function getWeatherForecast(city) {
    const apiKey = '3746ad9b2aeb953b117a94ca8d578e56';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const forecastDiv = document.getElementById('forecast');
        forecastDiv.innerHTML = '';

        data.list.forEach((item) => {
            const date = new Date(item.dt * 1000).toLocaleDateString();
            const time = new Date(item.dt * 1000).toLocaleTimeString();
            const weatherIcon = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;

            forecastDiv.innerHTML += `
                <div>
                    <h3>${date} ${time}</h3>
                    <img src="${weatherIcon}" alt="${item.weather[0].description}">
                    <p>Temp: ${item.main.temp}°C</p>
                    <p>${item.weather[0].description}</p>
                </div>
            `;
        });
    } catch (error) {
        alert('Failed to retrieve forecast data');
    }
}





function saveFavoriteCity(city) {
    let favorites = JSON.parse(localStorage.getItem('favoriteCities')) || [];
    if (!favorites.includes(city)) {
        favorites.push(city);
        localStorage.setItem('favoriteCities', JSON.stringify(favorites));
    }
    displayFavoriteCities();
}

function displayFavoriteCities() {
    const favoritesDiv = document.getElementById('favorites');
    let favorites = JSON.parse(localStorage.getItem('favoriteCities')) || [];
    favoritesDiv.innerHTML = '';

    favorites.forEach(city => {
        favoritesDiv.innerHTML += `<button onclick="getWeather('${city}')">${city}</button>`;
    });
}

// Call this function on page load
window.onload = () => {
    loadWeather();
    displayFavoriteCities();
};


function setWeatherBackground(weather) {
    if (weather.includes('rain')) {
        document.body.className = 'rainy';
    } else if (weather.includes('sun')) {
        document.body.className = 'sunny';
    } else {
        document.body.className = '';
    }
}

// Call this function after fetching the weather data
setWeatherBackground(data.weather[0].description);
