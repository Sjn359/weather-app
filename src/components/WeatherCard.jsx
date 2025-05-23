import React from "react";

export default function WeatherCard({ weather }) {
  if (!weather) return null;

  const { name, sys, main, weather: details } = weather;

  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 w-80 text-center text-white shadow-lg">
      <h2 className="text-2xl font-semibold mb-2">
        {name}, {sys.country}
      </h2>
      <p className="text-lg">
        {details[0].main} - {details[0].description}
      </p>
      <p className="text-5xl font-bold my-4">{Math.round(main.temp)}°C</p>
      <p>Feels like: {Math.round(main.feels_like)}°C</p>
      <p>Humidity: {main.humidity}%</p>
    </div>
  );
}
