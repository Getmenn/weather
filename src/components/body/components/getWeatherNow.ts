import { ISetDataWeather } from "../../../types/dats";
import { weatherApi } from "../../API/weatherApi";

const getWeatherNow =  (setDataWeather : ISetDataWeather) => { 
    
    new Promise<string>((res, rej) => {
        const coords = localStorage.getItem('position');
        if (typeof coords === 'string') {
            res(coords);
        } else {
            rej(new Error('Неверный тип координат'));
        }
    })
        .then(coords => {
            const { lon, lat } = JSON.parse(coords);
            return weatherApi.getWeatherNow(lon, lat);
        })
        .then(data => {
            setDataWeather(data);
        })
        .catch(err => {
            console.error(err);
        });
}

export {getWeatherNow}