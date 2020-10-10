import React from 'react';

interface WeatherResultsProps {
    userInputData: string;
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

export const WeatherResults: React.FC<WeatherResultsProps> = ({ userInputData = [], tempData, weatherData }) => {
    console.log(userInputData);

    return (
        <div>
            <div style={{ visibility: userInputData[0] === undefined ? 'hidden' : 'visible' }}>
                MAIN CARD: <br></br>
                City: {userInputData}
                <br></br>
                Picture: {weatherData.icon}
                <br></br>
                Temperature: {tempData.temp}
                <br></br>
                Weather: {weatherData.main}, {weatherData.description}
                <br></br>
            </div>
            <div style={{ visibility: userInputData[0] === undefined ? 'hidden' : 'visible' }}>
                EXTRA CARD: <br></br>
                Feels like: {tempData.feels_like}
                <br></br>
                Humidity: {tempData.humidity}
                <br></br>
                Min temperature: {tempData.temp_min}
                <br></br>
                Max temperature: {tempData.temp_max}
            </div>
        </div>
    );
};
