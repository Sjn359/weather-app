import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {
    if (!city.trim()) return;

    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather:", error);
      setWeather(null);
      alert("Could not fetch weather. Please try another city.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-pink-500 via-red-500 to-yellow-400 p-8 max-w-md mx-auto">
      <h1 className="text-white text-4xl font-extrabold mb-2">Weather App</h1>
      <p className="text-white mb-6 text-center opacity-80">
        Get the latest weather info for any city — just start typing and press
        Enter!
      </p>
      <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />
      <WeatherCard weather={weather} />
      <div className="mt-8 text-white text-sm opacity-80">
        <p>Tip: Try searching for cities like London, New York, or Tokyo.</p>
      </div>
      <footer className="text-white text-xs mt-12 opacity-50">
        © 2025 Salma Jahan. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
