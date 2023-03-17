import { useEffect, useState } from 'react'
import { weatherApi } from '../API/weatherApi'
import { usePosition } from '../hook/usePosition';
import './body.scss'
import { SelectCity } from './components/selectCity/SelectCity';

const Body: React.FC = () => {
    const { coordinates, error } = usePosition();
    const [ cityStatus, setCityStatus ] = useState<boolean>(false);
    
    useEffect(() => {
        if (localStorage.getItem('position') === null) {
            setCityStatus(false);
        }
        else {
            setCityStatus(true);
        }
    }, [coordinates])

    return (
        <>
            <div className="body">
                {!cityStatus && <SelectCity />}
            </div>
        </> 
    )
}

export {Body}