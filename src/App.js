import React from "react";
import WorkListApp from "./WorkListApp/Components/WorkListApp";
import WeatherApp from "./WeatherApp/Components/WeatherApp";
import Menu from "./Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Menu />
        <Routes>
          <Route path="/" exact element={<WorkListApp />} />
          <Route path="/WorkListApp" element={<WorkListApp />} />
          <Route path="/WeatherApp" element={<WeatherApp />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
