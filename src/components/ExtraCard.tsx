import React from "react";

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
        <div>
          Feels like: {tempData.feels_like}°C
          <br></br>
          Humidity: {tempData.humidity}
          <br></br>
          Min temperature: {tempData.temp_min}°C
          <br></br>
          Max temperature: {tempData.temp_max}°C
        </div>
    </div>
  );
};
