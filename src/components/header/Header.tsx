import { useEffect, useState } from 'react';
import { usePosition } from '../../hooks/usePosition';
import { SelectCity } from './components/selectCity/SelectCity';
import './header.scss'

interface IHeader{
    setCityStatus: (cityStatus: boolean) => void;
    cityStatus: boolean;
}

const Header: React.FC<IHeader> = ({setCityStatus, cityStatus}) => {

    const { coordinates, error } = usePosition();
    
    const [ position, setPosition ] = useState<boolean>(false)
    
    useEffect(() => { 
        if (position === false) {
            setCityStatus(false);
        }
        else {        
            setCityStatus(true);
        }
    }, [position])

    
    useEffect(() => { 
        if (coordinates.lat === 0) {
            setCityStatus(false);     
        }
        else {
            setCityStatus(true);
        }
    }, [coordinates])

    useEffect(() => {    
        if (localStorage.getItem('position') !== null) {
            setCityStatus(true);       
        }
    }, [])

    return <div className='header'>
        {cityStatus === false && <SelectCity setPosition={setPosition} />}
        <span>{localStorage.getItem('city') || 'Не отпределен' }</span>
    </div>
}

export {Header}