import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center px-4">
      <div className="bg-white bg-opacity-80 backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Weather App</h1>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter city name"
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="text-center">
          <p className="text-lg font-medium text-gray-700">🌤️ 26°C</p>
          <p className="text-sm text-gray-600">Cloudy - Dhaka</p>
        </div>
      </div>
    </div>
  );
}

export default App;
