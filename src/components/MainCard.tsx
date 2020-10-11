import React, { useState } from "react";
import { ExtraCard } from "./ExtraCard";
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

  console.log((userInputData.toString()).toUpperCase())

  return (
    <div
      style={{
        visibility: userInputData[0] === undefined ? "hidden" : "visible",
      }}
    >
      <Container
        maxWidth="sm"
        style={{
          border: "solid 1px rgba(130, 130, 130, 0.8)",
          borderRadius: "32px",
          padding: "2em",
          boxShadow: "0px 5px 10px 0px rgba(235, 235, 235, 0.5)",
          backgroundColor: "rgba(245, 245, 245, 1)",
          marginTop: "-0.5em",
        }}
      >
        <div>
          <h2>{(userInputData.toString()).toUpperCase()}</h2>
          <br></br>
          <img
            style={{
              marginTop: "-1em",
              filter: "contrast(200%)",
            }}
            src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
            alt="weather icon"
          ></img>
          <br></br>
          It is currently {tempData.temp}°C with{" "}
          {weatherData.description === "few clouds"
            ? `a ${weatherData.description}`
            : weatherData.description}
          !<br></br>
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
