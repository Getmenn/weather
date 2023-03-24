
interface IWindDeg{
    deg: number
}


const windСonverter = ({ deg }: IWindDeg): React.ReactNode => { 
    
    switch (true) {
        case (deg <= 22):
            return 'Cеверный'

        case (deg > 22 && deg <= 67):
            return 'Северо-восточный'
        
        case (deg > 67 && deg <= 112):
            return 'Вочточный'
        
        case (deg > 112 && deg <= 157):
            return 'Юго-восточнй'
        
        case (deg > 157 && deg <= 202):
            return 'Южный'
        
        case (deg > 202 && deg <= 247):
            return 'Юго-западный'
        
        case (deg > 247 && deg <= 292):
            return 'Западный'
        
        case (deg > 292 && deg <= 337):
            return 'Северо-западный'
        
        case (deg > 337 && deg <= 360):
            return 'Северный'
    
        default:
            return String(deg)
    }
}

export {windСonverter}