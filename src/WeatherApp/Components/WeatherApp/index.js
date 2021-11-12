import React, { useEffect, useState } from "react";
import "./index.css";
import NewLocation from "../NewLocation";
import LocationList from "../LocationList";
import SearchForm from "../SearchForm";
export const WeatherAppContext = React.createContext();
const url =
  "https://api.openweathermap.org/data/2.5/group?units=metric&appid=d08f64b961f1a665d0c8f22b1815dffd&id=";
const WeatherApp = () => {
  const [locations, setLocations] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  useEffect(() => {
    const locationIds = JSON.parse(localStorage.getItem("locationIds"));
    if (!locationIds) {
      localStorage.setItem("locationIds", JSON.stringify([]));
    } else {
      if (locationIds.length > 0) {
        let ids = "";
        let lastIndex = locationIds.length - 1;
        locationIds.forEach((element, index) => {
          if (index !== lastIndex) {
            ids += element + ",";
          } else {
            ids += element;
            fetch(url + ids)
              .then((res) => {
                return res.json();
              })
              .then((data) => {
                setLocations(data.list);
              });
          }
        });
      }
    }
  }, []);
  return (
    <WeatherAppContext.Provider
      value={{ locations, setIsSearch, setLocations }}
    >
      <div id="WeatherApp">
        {isSearch && <SearchForm />}
        <LocationList />
        <NewLocation />
      </div>
    </WeatherAppContext.Provider>
  );
};

export default WeatherApp;
