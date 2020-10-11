import React from "react";
import Container from "../../node_modules/@material-ui/core/Container";
import feelsLike from "../images/feelsLike.png";
import maxTemp from "../images/maxTemp.png";
import minTemp from "../images/minTemp.png";
import humidity from "../images/humidity.png";

interface ExtraCardProps {
  tempData: {
    temp?: any;
    feels_like?: number;
    humidity?: number;
    temp_max?: number;
    temp_min?: number;
  };
}

export const ExtraCard: React.FC<ExtraCardProps> = ({ tempData }) => {
  return (
    <div>
      <Container
        maxWidth="sm"
        style={{
          borderLeft: "solid 1px rgba(30, 30, 30, 0.5)",
          borderRight: "solid 1px rgba(30, 30, 30, 0.5)",
          borderBottom: "solid 1px rgba(30, 30, 30, 0.5)",
          borderRadius: "16px",
          padding: "2em",
          boxShadow: "0px 5px 25px 0px rgba(30, 30, 30, 0.8)",
          backgroundColor: "rgba(35, 40, 48, 1)",
          color: "whitesmoke",
        }}
      >
        <div style={{ display: "flex", margin: "-1em" }}>
          <div style={{ padding: "+.5em" }}>
            <img src={feelsLike} alt="feels like icon"></img>
            <p>Feels like {tempData.feels_like}°C </p>
          </div>
          <div style={{ padding: "0.5em" }}>
            <img src={humidity} alt="humidity icon"></img>
            <p>Humidity {tempData.humidity} </p>
          </div>
          <div style={{ padding: "0.5em" }}>
            <img src={minTemp} alt="min temp icon"></img>
            <p>Min {tempData.temp_min}°C</p>
          </div>
          <div style={{ padding: "0.5em" }}>
            <img src={maxTemp} alt="max temp icon"></img>
            <p>Max {tempData.temp_max}°C</p>
          </div>
        </div>
      </Container>
    </div>
  );
};
