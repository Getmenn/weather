
interface IWindDeg{
    deg: number
}


const windСonverter = ({ deg }: IWindDeg): React.ReactNode => { 
    
    switch (true) {
        case (deg <= 22):
            return 'C'

        case (deg > 22 && deg <= 67):
            return 'СВ'
        
        case (deg > 67 && deg <= 112):
            return 'В'
        
        case (deg > 112 && deg <= 157):
            return 'ЮВ'
        
        case (deg > 157 && deg <= 202):
            return 'Ю'
        
        case (deg > 202 && deg <= 247):
            return 'ЮЗ'
        
        case (deg > 247 && deg <= 292):
            return 'З'
        
        case (deg > 292 && deg <= 337):
            return 'СЗ'
        
        case (deg > 337 && deg <= 360):
            return 'С'
    
        default:
            return String(deg)
    }
}

export {windСonverter}