import InfoPers from "./components/Infopers"
import Footer from "./components/Footer"
import Cmlg from "./components/Cmlg"
import Cmtc from "./components/Cmtc"
import './App.css'

function App() {


  return (
    <>
      <InfoPers name="Salah Eddine" bdate="01/01/2003" bloca="Casablanca" sf="Célibataire"/>
      <Cmlg/>
      <Cmtc/>
      <Footer/>
    </>
  )
}

export default App
