import { useEffect, useState } from 'react';
import './body.scss'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { weatherApi } from '../API/weatherApi';

interface IBody{
    cityStatus: boolean;
}

interface WeatherData {
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

const Body: React.FC<IBody> = ({cityStatus}) => {

    const [value, setValue] = useState('1');
    const [ dataWeather, setDataWeather ] = useState<WeatherData | null>(null)

    useEffect(() => {
        if (cityStatus) {
            getWeatherNow()
        }
        
        
        //weatherApi.getWeatherNow() 
    }, [cityStatus])

    const getWeatherNow = async () => {
        if (localStorage.getItem('position') !== null) {
            const coords = localStorage.getItem('position') || '0'
            const {lon, lat} = JSON.parse(coords)
            const data = await weatherApi.getWeatherNow(lon, lat)
            setDataWeather(data)
        }
    }
    


    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <>
            <div className="body">
                <Box sx={{ width: '100%', typography: 'body1'}}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Погода сегодня" value="1" />
                            <Tab label="Погода на 5 дней" value="2" />
                        </TabList>
                        </Box>
                        <TabPanel value="1">
                            Погода сегодня
                            {
                                dataWeather &&
                                <>
                                    <h3>Облачность</h3>
                                    <span>{dataWeather.clouds.all}%</span>
                                    <h3>Температура</h3>
                                    <span>{dataWeather.main.temp} °C</span>
                                    <h3>Минимальная температура</h3>
                                    <span>{dataWeather.main.temp_min} °C</span>
                                    <h3>Атмосферное давление</h3>
                                    <span>{dataWeather.main.pressure} мм рт. ст.</span>
                                    <h3>Время восхода солнца</h3>
                                    <span>{new Date(dataWeather.sys.sunrise * 1000).toLocaleString()}</span>
                                    <h3>Время заката солнца</h3>
                                    <span>{new Date(dataWeather.sys.sunset * 1000).toLocaleString()}</span>
                                    <h3>Погодные услови</h3>
                                    <span>{dataWeather.weather[0].description}</span>
                                    <h3>Скорость ветра</h3>
                                    <span>{dataWeather.wind.speed} м/с</span>
                                    <h3>Направление ветра</h3>
                                    <span>{dataWeather.wind.deg}</span>
                                </>
                            }
                        </TabPanel>
                        <TabPanel value="2">Погода на 5 дней</TabPanel>
                    </TabContext>
                </Box>   
            </div>
        </> 
    )
}

export {Body}