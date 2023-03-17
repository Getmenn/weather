import { Body } from "./components/body/Body"
import { Header } from "./components/header/Header"
import './index.scss'

const App: React.FC = () => {

    return (
        <>
            <Header />
            <Body />
        </>
    )
}

export {App}