import { useEffect, useState } from 'react';
import './body.scss'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { IBody, IWeatherData } from '../../types/dats';
import { WeatherToday } from './components/weatherToday/WeatherToday';
import { getWeatherNow } from './components/getWeatherNow';

const Body: React.FC<IBody> = ({cityStatus}) => {

    const [value, setValue] = useState('1');
    const [ dataWeather, setDataWeather ] = useState<IWeatherData | null>(null)

    useEffect(() => {       
        if (cityStatus === true) {
            getWeatherNow(setDataWeather)
        }
    }, [cityStatus])


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
                                dataWeather
                                    ? <WeatherToday dataWeather={dataWeather} />
                                    : null
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