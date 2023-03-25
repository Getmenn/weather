import { cities } from "../../../../data/cities"
import Select from "react-select";
import { weatherApi } from "../../../../API/weatherApi";
import "./selectCity.scss"
import { Icity, ISelectCity } from "../../../../types/dats";

const SelectCity: React.FC<ISelectCity> = ({ setPosition }) => {

    const handleChange = async (option: Icity | null)  => {
        if (option) {
            //await weatherApi.getCoordCity(option.value);
            localStorage.setItem('city', option.value)
            setPosition(true)
        }
    };
 

    return (
        <>
            <div className="selectCity">
                <h3>Разрешите доступ к вашему местоположению или выберите город</h3>
                <Select options={cities} placeholder="Выберите город" onChange={handleChange} className='ReactSelect' /> 
            </div>
            <div className="ovelay" onClick={() => setPosition(true)}></div>
        </>
       
    )
}

export {SelectCity}