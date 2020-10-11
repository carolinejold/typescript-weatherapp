// eslint-disable-next-line
import React, { useState } from "react";
import { DetailCard } from "./DetailCard";
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
    temp?: any;
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
  };

  const styles = {
    containerStyles: {
      border: "solid 1px rgba(100, 100, 100, 0.8)",
      borderRadius: "16px",
      padding: "2em",
      boxShadow: "0px 5px 25px 0px rgba(30, 30, 30, 0.5)",
      marginTop: "1em",
      minHeight: "18em",
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

  const temperature = `${Math.round(tempData.temp)}`;
  const degrees = `°C`;

  return (
    <div
      style={{
        visibility: userInputData[0] === undefined ? "hidden" : "visible",
      }}
    >
      <Container maxWidth="sm" style={styles.containerStyles}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            justifyContent: "spaceAround",
          }}
        >
          <div>
            <h2 style={{ paddingBottom: "0.5em", fontSize: '1.8em', fontWeight: 'normal' }}>{userInputData.toString()}</h2>
            <p>It is</p>
            <p style={{ fontSize: "3em" }}>
              {typeof tempData.temp === "number"
                ? temperature + degrees
                : undefined}
            </p>
            <p>with</p>
            <p style={{ fontSize: "1.2em" }} >
              {weatherData.description === "few clouds"
                ? `a ${weatherData.description}`
                : weatherData.description}
              !
            </p>
          </div>

          <div>
            {" "}
            <img
              style={{
                marginTop: "-1em",
                filter: "contrast(200%)",
                paddingTop: "1em",
              }}
              src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
              alt="weather icon"
            ></img>
          </div>
        </div>

        <Button
          style={{
            marginTop: "2em",
            marginBottom: "-3.5em",
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
        <DetailCard tempData={tempData} />
      </div>
    </div>
  );
};
