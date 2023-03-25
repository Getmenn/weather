export interface IBody{
    cityStatus: boolean;
}

export interface IWeatherData {
    coord: {
      lon: number;
      lat: number;
    };
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    base: string;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
    };
    visibility: number;
    wind: {
      speed: number;
      deg: number;
    };
    clouds: {
      all: number;
    };
    dt: number;
    sys: {
      type: number;
      id: number;
      country: string;
      sunrise: number;
      sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}
  
export interface IWeatherResponse {
  data: IWeatherData
}

export interface Icity{
    label: string,
    value: string
}

export interface  ISetDataWeather {
    (dataWeather: IWeatherData): void;
}

export interface IWeatherToday{
    dataWeather: IWeatherData | null
}

export interface ISelectCity{
  setPosition: (position: boolean) => void;
}

export interface IHeader{
  setCityStatus: (cityStatus: boolean) => void;
  cityStatus: boolean;
}