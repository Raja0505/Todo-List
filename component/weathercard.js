import React from "react";

const Weathercard = ({ tempinfo }) => {
  const {
    humidity,
    pressure,
    temp,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = tempinfo;
  const sec = sunset;
  const date = new Date(sec * 1000);
  const time = `${date.getHours()}:${date.getMinutes()}`;
  const Weatherimage = document.querySelector("#weatherimage");

  if (weathermood === "Sunny") {
    Weatherimage.src = "images/sunny.png";
  } else if (weathermood === "Rain") {
    Weatherimage.src = "images/rain.png";
  } else if (weathermood === "Clouds") {
    Weatherimage.src = "images/clouds.png";
  } else if (weathermood === "Clear") {
    Weatherimage.src = "images/clear.png";
  } else if (weathermood === "Smoke") {
    Weatherimage.src = "images/fog.png";
  } else if (weathermood === "Haze") {
    Weatherimage.src = "images/humidity.svg";
  }
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <img src="images/sunny.png" id="weatherimage" />
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">
              {name} {country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>

        {/* ++++++++ Four Column section+++++++*/}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {time} PM <br />
                Sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Weathercard;
