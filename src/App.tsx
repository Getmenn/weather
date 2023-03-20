import { useState } from "react";
import { Body } from "./components/body/Body"
import { Header } from "./components/header/Header"
import './index.scss'

const App: React.FC = () => {

    const [ cityStatus, setCityStatus ] = useState<boolean>(false);

    return (
        <>
            <Header setCityStatus={setCityStatus} cityStatus={cityStatus} />
            <Body cityStatus={cityStatus} />
        </>
    )
}

export {App}