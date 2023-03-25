import { ISetDataWeather } from "../../../types/dats";
import { weatherApi } from "../../../API/weatherApi";

const getWeatherNow =  async (setDataWeather : ISetDataWeather) => {    
    const city = localStorage.getItem('city');
    if (city) {
        const responce = await weatherApi.getWeatherNowFromCity(city) 
        setDataWeather(responce);
    }           
}

export {getWeatherNow}