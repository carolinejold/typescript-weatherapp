export interface Temp {
  temp: number | undefined;
  feels_like: number | undefined;
  humidity: number | undefined;
  temp_max: number | undefined;
  temp_min: number | undefined;
}

export interface Weather {
  id: number | undefined;
  main: string | undefined;
  description: string | undefined;
  icon: string | undefined;
}

export const tempDefault = {
  temp: undefined,
  feels_like: undefined,
  humidity: undefined,
  temp_max: undefined,
  temp_min: undefined,
};

export const weatherDefault = {
  id: undefined,
  main: undefined,
  description: undefined,
  icon: undefined,
};

export interface SearchBarProps {
  setUserInputData: React.Dispatch<React.SetStateAction<string>>;
}

export interface MainCardProps {
    userInputData: string;
    weatherData: Weather;
    tempData: Temp;
  }