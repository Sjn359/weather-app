import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const handleSearch = () => {
    if (!city.trim()) return; // ignore empty

    const mockData = {
      name: city,
      sys: { country: "US" },
      main: { temp: 22, feels_like: 20, humidity: 60 },
      weather: [{ main: "Clear", description: "clear sky" }],
    };
    setWeather(mockData);
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
        Powered by OpenWeather API
      </footer>
    </div>
  );
}

export default App;
