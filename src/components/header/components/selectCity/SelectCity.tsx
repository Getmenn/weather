import { useEffect, useRef } from "react"
import { cities } from "../../../../data/cities"
import { weatherApi } from "../../../API/weatherApi";
import "./selectCity.scss"

interface ISelectCity{
    setPosition: (position: boolean) => void;
}

const SelectCity: React.FC<ISelectCity> = ({setPosition}) => {

    const cityRef = useRef<(HTMLInputElement)>(null);

    const hendleSelectCity = () => { //исправить
        
        if (cityRef.current !== null) {

            const value = cityRef.current.value
            const arr = cities.filter(el => el === value)
            
            if (arr.length > 0) {
                weatherApi.getCoordCity(arr[0]);
                localStorage.setItem('city', value)
                setPosition(true)
            }
             
        }
        
    }
    
    

    return (
        <>
            <div className="selectCity">
                <h3>Разрешите доступ к вашему местоположению или выберите город</h3>
                <input list="select" placeholder="Выберите город" onChange={hendleSelectCity} ref={cityRef}/>
                <datalist id="select" className="smartSelect" >
                    {cities.map(el => <option key={el}>{el}</option>)}
                </datalist > 
            </div>
            <div className="ovelay"></div>
        </>
       
    )
}

export {SelectCity}