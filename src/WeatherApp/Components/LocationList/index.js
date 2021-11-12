import React, { useContext } from "react";
import "./index.css";
import LocationItem from "../LocationItem";
import { WeatherAppContext } from "../WeatherApp";
const LocationList = () => {
  const { locations } = useContext(WeatherAppContext);
  return (
    <div id="location-list">
      {locations.map((loca) => {
        return (
          <LocationItem
            key={loca.id}
            id={loca.id}
            name={loca.name}
            country={loca.sys.country}
            condition={loca.weather[0].main}
            icon={loca.weather[0].icon}
            temp={loca.main.temp}
          />
        );
      })}
    </div>
  );
};

export default LocationList;
