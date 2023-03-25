import { useEffect, useState } from 'react'
import { IWeatherToday } from '../../../../types/dats'
import { windСonverter } from '../../../../utils/windСonverter';
import './weatherToday.scss'

const WeatherToday: React.FC<IWeatherToday> = ({ dataWeather }) => {

    const [iconFolder, setIconFolder] = useState<string>('')
    
    console.log(dataWeather?.weather[0].icon.slice(2));

    useEffect(() => {
        if (dataWeather?.weather[0].icon.slice(2) === 'd') {
            setIconFolder('day')
        }
        else (
            setIconFolder('night')
        )
    }, [])
    

    return (
        <>
            {dataWeather ?
                <>
                    <div className="WeatherTodayContainer">

                    </div>
                    <h2>{dataWeather.name}</h2>
                    <h3>Облачность</h3>
                    <span>{dataWeather.clouds.all}%</span>
                    <h3>Температура</h3>
                    <span>{dataWeather.main.temp} °C</span>
                    <h3>Минимальная температура</h3>
                    <span>{dataWeather.main.temp_min} °C</span>
                    <h3>Атмосферное давление</h3>
                    <span>{dataWeather.main.pressure -265} мм рт. ст.</span>
                    <h3>Время восхода солнца</h3>
                    <span>{new Date(dataWeather.sys.sunrise * 1000).toLocaleString()}</span>
                    <h3>Время заката солнца</h3>
                    <span>{new Date(dataWeather.sys.sunset * 1000).toLocaleString()}</span>
                    <h3>Погодные услови</h3>
                    <span>
                        {dataWeather.weather[0].description}
                        <img src={`./iconsWeather/${iconFolder}/${dataWeather.weather[0].icon}.png`} alt="weather icon" />
                    </span>
                    <h3>Скорость ветра</h3>
                    <span>{dataWeather.wind.speed} м/с</span>
                    <h3>Направление ветра</h3>
                    <span>{windСonverter({ deg: dataWeather.wind.deg })}</span>
                </>
                : null
            }
        </>
    )

}

export {WeatherToday}