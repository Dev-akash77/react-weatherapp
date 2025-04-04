Weather.io



Weather.io is a modern weather forecasting application built with React and Tailwind CSS. It provides real-time weather updates, a 5-day forecast, air quality details, and more. The app also allows users to fetch weather data for their current location with a single click.


---

🌟 Features

🌤 Current Weather: Get real-time weather updates for any city.

📅 5-Day Forecast: See upcoming weather trends.

🌬 Wind Direction: View wind direction with an intuitive perspective icon.

🌆 Weather Image: Dynamic background image based on the selected city.

🌿 Air Quality: Get real-time air pollution levels.

🌅 Sunset & Sunrise: Know the exact timings for sunrise and sunset.

💧 Weather Details: Includes humidity, pressure, visibility, and "feels like" temperature.

📍 Current Location: Click on the location icon to get weather details for your current location.



---

🚀 Live Demo

🔗 Weather.io


---

🛠 Technologies Used

React.js – Frontend framework

Tailwind CSS – Styling

Axios – API requests

OpenWeatherMap API – Weather data provider



---

🛠 Installation & Setup

1️⃣ Clone the repository:

git clone https://github.com/yourusername/weather.io.git
cd weather.io

2️⃣ Install dependencies:

npm install

3️⃣ Set up environment variables:

Create a .env file in the root directory.

Add your OpenWeatherMap API key.


4️⃣ Run the application:

npm run dev

5️⃣ Open in browser:

Visit http://localhost:5173/ (or as indicated in the terminal).



---

🔗 API Endpoints

The application fetches weather data using the OpenWeatherMap API. Below are some key API endpoints used:

🔹 Current Weather Data:

GET https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}

🔹 5-Day / 3-Hour Forecast:

GET https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}

🔹 Air Pollution Data:

GET https://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={API_KEY}

🔹 Geolocation Weather (Current Location):

GET https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}


---

👤 Author

Akash Biswas 
📩 Email: akashrahul2006@gmail.com



---

📜 License

This project is open-source and available under the MIT License.

