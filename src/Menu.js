import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <Link to="WorkListApp">WorkListApp</Link>
      <Link to="WeatherApp">WeatherApp</Link>
    </>
  );
};

export default Menu;
