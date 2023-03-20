import { weather } from "./Api";
import { AxiosResponse } from 'axios';

interface WeatherApi {
    getWeatherNow: (lon: number, lat: number) => Promise<any>;
    geWeatherFiveDay: (lon: number, lat: number) => Promise<any>;
    getCoordCity: (city: string) => Promise<any>;
}

const apiKey: string = 'ddc34dc919e0212c931b8db3f8cee7de';

export const weatherApi:WeatherApi = {
    getWeatherNow: async (lon, lat) => { //погода сейчас
        const response: AxiosResponse<any> = await weather.get(`weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=ru&units=metric`);
        console.log(response.data);
        
        return response.data;  
    },
    geWeatherFiveDay: async (lon, lat) => { //погода на 5 дней
        const response: AxiosResponse<any> = await weather.get(`forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=ru&units=metric`); 
        console.log(response.data);
    },
    getCoordCity: async (city) => { //координаты города
        const response: AxiosResponse<any> = await weather.get(`/weather?q=${city}&appid=${apiKey}`);
        const { coord } = response.data;
        localStorage.setItem('position', JSON.stringify(coord))
        console.log(coord); 
    },
     
}