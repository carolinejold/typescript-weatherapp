import React, { useState } from "react";
import { ExtraCard } from "./ExtraCard";
import rainImg from "../images/rainImg.jpg";
import cloudImg from "../images/cloudImg.jpg";
import clearImg from "../images/clearImg.jpg";
import fewImg from "../images/fewImg.jpg";
import stormImg from "../images/stormImg.jpg";
import snowImg from "../images/snowImg.jpg";
import mistImg from "../images/mistImg.jpg";
import Button from "../../node_modules/@material-ui/core/Button";
import Container from "../../node_modules/@material-ui/core/Container";

interface MainCardProps {
  userInputData: string[];
  tempData: {
    temp?: number;
    feels_like?: number;
    humidity?: number;
    temp_max?: number;
    temp_min?: number;
  };
  weatherData: {
    id?: number;
    main?: string;
    description?: string;
    icon?: string;
  };
}

export const MainCard: React.FC<MainCardProps> = ({
  userInputData,
  weatherData,
  tempData,
}) => {
  const [toggleExtra, setToggleExtra] = useState<boolean | any>(false);

  const handleClick = () => {
    setToggleExtra(!toggleExtra);
    console.log(toggleExtra);
  };

  const styles = {
    containerStyles: {
      border: "solid 1px rgba(130, 130, 130, 0.8)",
      borderRadius: "16px",
      padding: "2em",
      boxShadow: "0px 5px 10px 0px rgba(235, 235, 235, 0.5)",
      marginTop: "-0.5em",
      color:
        typeof weatherData.description === "string" &&
        weatherData.description.includes("snow") === true
          ? "black"
          : typeof weatherData.description === "string" &&
            weatherData.description.includes("mist") === true
          ? "black"
          : "white",
      backgroundImage:
        typeof weatherData.description === "string" &&
        weatherData.description.includes("rain") === true
          ? `url(${rainImg})`
          : typeof weatherData.description === "string" &&
            weatherData.description.includes("few") === true
          ? `url(${fewImg})`
          : typeof weatherData.description === "string" &&
            weatherData.description.includes("scattered") === true
          ? `url(${fewImg})`
          : typeof weatherData.description === "string" &&
            weatherData.description.includes("clouds") === true
          ? `url(${cloudImg})`
          : typeof weatherData.description === "string" &&
            weatherData.description.includes("clear") === true
          ? `url(${clearImg})`
          : typeof weatherData.description === "string" &&
            weatherData.description.includes("thunderstorm") === true
          ? `url(${stormImg})`
          : typeof weatherData.description === "string" &&
            weatherData.description.includes("snow") === true
          ? `url(${snowImg})`
          : typeof weatherData.description === "string" &&
            weatherData.description.includes("mist") === true
          ? `url(${mistImg})`
          : "black",
    },
  };

  return (
    <div
      style={{
        visibility: userInputData[0] === undefined ? "hidden" : "visible",
      }}
    >
      <Container maxWidth="sm" style={styles.containerStyles}>

        <div style={{ display: 'flex' }}>
          <h2 style={{ textAlign: "left" }}>
            {userInputData.toString().toUpperCase()}
          </h2>

          <img
            style={{
              marginTop: "-1em",
              filter: "contrast(200%)",
              float: "right",
            }}
            src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
            alt="weather icon"
          ></img>
    
          <p>It is currently {tempData.temp}°C with{" "}
          {weatherData.description === "few clouds"
            ? `a ${weatherData.description}`
            : weatherData.description}
          !</p>
        </div>

        <Button
          style={{
            marginTop: "1em",
            marginBottom: "-0.5em",
            backgroundColor: "white",
          }}
          variant="outlined"
          color="default"
          onClick={handleClick}
        >
          {toggleExtra === true ? "Hide details" : "More details"}
        </Button>
      </Container>

      <div
        style={{
          visibility: toggleExtra === true ? "visible" : "hidden",
        }}
      >
        <ExtraCard tempData={tempData} />
      </div>

    </div>
  );
};
