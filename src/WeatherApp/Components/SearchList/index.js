import React, { useContext } from "react";
import "./index.css";
import { WeatherAppContext } from "../WeatherApp";
const SearchList = ({ searchList }) => {
  const { locations, setLocations, setIsSearch } =
    useContext(WeatherAppContext);
  const addLocation = (id) => {
    const idsArray = JSON.parse(localStorage.getItem("locationIds"));
    idsArray.unshift(id);
    localStorage.setItem("locationIds", JSON.stringify(idsArray));
    const location = searchList.find((id) => id === id);
    setLocations([location, ...locations]);
    setIsSearch(false);
  };
  if (searchList === "no result") {
    return (
      <div>
        <h3 style={{ marginTop: "2rem", textAlign: "center" }}>
          No search result
        </h3>
      </div>
    );
  }
  return (
    <>
      <p style={{ textAlign: "center", margin: "1rem 0" }}>Select city</p>
      {searchList.map((loca) => {
        return (
          <div
            onClick={() => addLocation(loca.id)}
            className="search-item"
            key={loca.id}
          >
            <div>
              <p>
                {loca.name}(
                <img
                  src={`https://openweathermap.org/images/flags/${loca.sys.country.toLowerCase()}.png`}
                />
                )
              </p>
              <span>{loca.weather[0].main}</span>
            </div>
            <div>
              <span>
                {Math.round(loca.main.temp)}
                <sup>
                  <sup style={{ fontSize: "small" }}>o</sup>C
                </sup>
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SearchList;
