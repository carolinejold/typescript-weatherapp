// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import { SearchBar } from "./components/SearchBar";
import { MainCard } from "./components/MainCard";
import Container from "../node_modules/@material-ui/core/Container";
import "./App.css";
import axios from "axios";
import { Temp, Weather, tempDefault, weatherDefault } from "./types/types";

export const App: React.FC = () => {
  const [userInputData, setUserInputData] = useState<string[]>([]);
  const [tempData, setTempData] = useState<Temp>(tempDefault);
  const [weatherData, setWeatherData] = useState<Weather>(weatherDefault);

  useEffect(() => {
    const fetchData = async () => {
      if (userInputData[0] !== undefined) {
        let response = await axios(
          `https://api.openweathermap.org/data/2.5/weather?q=${userInputData}&units=metric&appid=ef9e479b1c45f1cb5b2c66bd14fbece9`
        );
        let result = await response.data;
        setTempData(result.main);
        setWeatherData(result.weather[0]);
        console.log(result);
      }
    };
    fetchData();
  }, [userInputData]);

  return (
    <div className="App">
      <Container maxWidth="sm">
        <SearchBar setUserInputData={setUserInputData} />
        <MainCard
          userInputData={userInputData}
          tempData={tempData}
          weatherData={weatherData}
        />
      </Container>
      <footer
        style={{ color: "whitesmoke", fontSize: "0.7em", marginTop: "7em" }}
      >
        © Caroline Old 2020
      </footer>
    </div>
  );
};
