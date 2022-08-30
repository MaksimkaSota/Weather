import React from "react";
import "./App.scss";
import Header from "./Header/Header";
import WeatherToday from "./WeatherToday/WeatherToday";
import WeatherFiveDay from "./WeatherFiveDay/WeatherFiveDay";

function App() {
  return (
    <div className="App">
      <Header />
      <WeatherToday />
      <WeatherFiveDay />
    </div>
  );
}

export default App;
