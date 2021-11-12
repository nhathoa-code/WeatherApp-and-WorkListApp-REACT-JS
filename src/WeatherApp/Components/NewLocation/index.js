import React, { useEffect, useContext } from "react";
import "./index.css";
import { WeatherAppContext } from "../WeatherApp";
const NewLocation = () => {
  const { setIsSearch } = useContext(WeatherAppContext);
  return (
    <div
      onClick={() => {
        setIsSearch(true);
      }}
      id="new-location"
    >
      <img src="/weather-icon-png-11099.png" alt="" />
      <div>
        <h4>New Location</h4>
        <p>Add weather forecast for a new location</p>
      </div>
    </div>
  );
};

export default NewLocation;
