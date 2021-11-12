import React, { useContext, useEffect } from "react";
import "./index.css";
import { WeatherAppContext } from "../WeatherApp";
const LocationItem = ({ id, name, country, condition, icon, temp }) => {
  const { locations, setLocations } = useContext(WeatherAppContext);
  const handleremove = (id) => {
    console.log("hello");
    const idsArray = JSON.parse(localStorage.getItem("locationIds"));
    const newIdsArray = idsArray.filter((ele) => ele !== id);
    localStorage.setItem("locationIds", JSON.stringify(newIdsArray));
    const newLocations = locations.filter((ele) => ele.id !== id);
    setLocations(newLocations);
  };
  return (
    <div
      onAnimationEnd={() => handleremove(id)}
      className="location-item-wrapper"
    >
      <div className="location-item">
        <div>
          <span
            onClick={(e) => {
              e.target.parentElement.parentElement.parentElement.classList.add(
                "remove"
              );
            }}
            className="material-icons"
          >
            clear
          </span>
          <p>
            {name}(
            <img
              src={`https://openweathermap.org/images/flags/${country.toLowerCase()}.png`}
            />
            )
          </p>
          <span>{condition}</span>
        </div>
        <div>
          <div>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
            <span>
              {Math.round(temp)}
              <sup>
                <sup style={{ fontSize: "small" }}>o</sup>C
              </sup>
            </span>
          </div>
        </div>
      </div>
    </div>
    // <div
    //   onAnimationEnd={() => handleremove(id)}
    //   className="location-item-wrapper"
    // >
    //   <div className="location-item">
    //     <div>
    //       <span
    //         onClick={(e) => {
    //           e.target.parentElement.parentElement.parentElement.classList.add(
    //             "remove"
    //           );
    //         }}
    //         className="material-icons"
    //       >
    //         clear
    //       </span>
    //       <p>
    //         {"abc"}(
    //         <img src={`https://openweathermap.org/images/flags/${"vn"}.png`} />)
    //       </p>
    //       <span>{"Clouds"}</span>
    //     </div>
    //     <div>
    //       <div>
    //         <img src={`http://openweathermap.org/img/wn/${"02d"}@2x.png`} />
    //         <span>
    //           {27}
    //           <sup>
    //             <sup style={{ fontSize: "small" }}>o</sup>C
    //           </sup>
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default LocationItem;
