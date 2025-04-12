
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [weather, setWeather] = useState({ temperature: 25, conditions: "Sunny" })
  //const [check, setCheck] = useState(false)

  return (
    <div>
      <span className={weather.temperature > 20 ? "red" : "blue"}>
        <p>Temperature: {weather.temperature}</p>
        <p>Conditions: {weather.conditions}</p>
      </span>
    </div>
  )
}

export default App
