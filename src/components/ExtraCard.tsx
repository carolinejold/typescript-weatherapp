import React from "react";
import Container from "../../node_modules/@material-ui/core/Container";

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
          color: 'whitesmoke'
        }}
      >
        <div>
          <p>Feels like: {tempData.feels_like}°C</p>
          <p>Humidity: {tempData.humidity}</p>
          <p>Min temperature: {tempData.temp_min}°C</p>
          <p>Max temperature: {tempData.temp_max}°C</p>
        </div>
      </Container>
    </div>
  );
};
