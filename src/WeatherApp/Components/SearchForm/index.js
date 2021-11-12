import React, { useContext, useState } from "react";
import "./index.css";
import SearchList from "../SearchList";
import { WeatherAppContext } from "../WeatherApp";
const base_url = "";
const SearchForm = () => {
  const [keyword, setKeyword] = useState("");
  const [searchList, setSearchList] = useState([]);
  const { setIsSearch } = useContext(WeatherAppContext);
  const base_url =
    "https://api.openweathermap.org/data/2.5/find?type=like&sort=population&cnt=30&units=metric&appid=d08f64b961f1a665d0c8f22b1815dffd&q=";
  const handleSearch = () => {
    if (keyword !== "") {
      fetch(`${base_url}${keyword}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.message !== "bad query") {
            setSearchList(data.list);
          } else {
            setSearchList("no result");
          }
        });
    }
  };
  return (
    <div
      onClick={(e) => {
        if (e.target.id === "search-form") {
          setIsSearch(false);
        }
      }}
      id="search-form"
    >
      <div>
        <span
          onClick={() => {
            setIsSearch(false);
          }}
          className="material-icons"
        >
          clear
        </span>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <p>Add weather forecast for a new location</p>
          <div>
            <input
              value={keyword}
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
              type="text"
              autoFocus
              placeholder="Type city to search..."
            />
            <button>
              <span className="material-icons">search</span> Search
            </button>
          </div>
        </form>
        {searchList.length > 0 && <SearchList searchList={searchList} />}
      </div>
    </div>
  );
};

export default SearchForm;
