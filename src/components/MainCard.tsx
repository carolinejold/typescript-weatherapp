import React, { useState } from "react";
import { ExtraCard } from "./ExtraCard";

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

  return (
    <div
      style={{
        visibility: userInputData[0] === undefined ? "hidden" : "visible",
      }}
    >
      <div>
        {userInputData}
        <br></br>
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
          alt="weather icon"
        ></img>
        <br></br>
        It is currently {tempData.temp}°C with{" "}
        {weatherData.description === "few clouds"
          ? `a ${weatherData.description}`
          : weatherData.description}
        <br></br>
      </div>
      <button onClick={handleClick}>More details...</button>
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
