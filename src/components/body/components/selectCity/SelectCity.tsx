import { useEffect, useRef } from "react"
import { cities } from "../../../../data/cities"
import "./selectCity.scss"

const SelectCity: React.FC = () => {

    const datalistRef = useRef(null);

    useEffect(() => {
        
    }, [])

    const hendleSelectCity = () => { //исправить
        console.log(datalistRef.current);
        console.log('1');
        
    }

    
    

    return (
        <>
            <div className="selectCity">
                <h3>Разрешите доступ к вашему местоположению или выберите город</h3>
                <input list="select" placeholder="Выберите город" onChange={hendleSelectCity}/>
                <datalist id="select" className="smartSelect" ref={datalistRef}>
                    {cities.map(el => <option key={el}>{el}</option>)}
                </datalist > 
            </div>
            <div className="ovelay"></div>
        </>
       
    )
}

export {SelectCity}