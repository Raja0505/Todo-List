import React, { useEffect, useState } from "react";
import "./style.css";
import Weathercard from "./weathercard";

const Temp = () => {
  const [weatherinfo, setweatherinfo] = useState("indore");
  const [tempinfo, settempinfo] = useState({});
  const Winfo = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherinfo}&units=metric&appid=365beea28895f60d551d40bbe3935cb1`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      const { humidity, pressure, temp } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const newweatherinfo = {
        humidity,
        pressure,
        temp,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };
      settempinfo(newweatherinfo);
    } catch (error) {
      console.log('There is something wrong',error);
    }
  };
  useEffect(() => {
    Winfo();
  }, []);
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search"
            id="search"
            className="searchTerm"
            value={weatherinfo}
            onChange={(e) => setweatherinfo(e.target.value)}
          />
          <button type="button" className="searchButton" onClick={Winfo}>
            Search
          </button>
        </div>
      </div>
      <Weathercard tempinfo={tempinfo} />
    </>
  );
};

export default Temp;
