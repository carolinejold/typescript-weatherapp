import React from "react";
import Container from "../../node_modules/@material-ui/core/Container";

interface ExtraCardProps {
  tempData: {
    temp?: number;
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
          borderLeft: "solid 1px rgba(200, 200, 200, 0.8)",
          borderRight: "solid 1px rgba(200, 200, 200, 0.8)",
          borderBottom: "solid 1px rgba(200, 200, 200, 0.8)",
          borderRadius: "16px",
          padding: "2em",
          boxShadow: "0px 1px 5px 0px rgba(235, 235, 235, 0.5)",
          backgroundColor: "rgba(245, 245, 245, 0.5)"
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
