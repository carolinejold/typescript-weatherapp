// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import { SearchBar } from "./components/SearchBar";
import { MainCard } from "./components/MainCard";
import Container from "../node_modules/@material-ui/core/Container";
import "./App.css";
import axios from "axios";

interface AppProps {}

interface TempProps {
  temp?: any;
  feels_like?: number;
  humidity?: number;
  temp_max?: number;
  temp_min?: number;
}

interface WeatherProps {
  id?: number;
  main?: string;
  description?: string;
  icon?: string;
}

export const App: React.FC<AppProps> = () => {
  const [userInputData, setUserInputData] = useState<string[]>([]);
  const [tempData, setTempData] = useState<TempProps>({
    temp: undefined,
    feels_like: undefined,
    humidity: undefined,
    temp_max: undefined,
    temp_min: undefined,
  });
  const [weatherData, setWeatherData] = useState<WeatherProps>({
    id: undefined,
    main: undefined,
    description: undefined,
    icon: undefined,
  });

  useEffect(() => {
    async function fetchData() {
      if (userInputData[0] !== undefined) {
        let response = await axios(
          `https://api.openweathermap.org/data/2.5/weather?q=${userInputData}&units=metric&appid=ef9e479b1c45f1cb5b2c66bd14fbece9`
        );
        let result = await response.data;
        setTempData(result.main);
        setWeatherData(result.weather[0]);
        console.log(result);
      }
    }
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
