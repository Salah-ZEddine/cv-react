import InfoPers from "./components/Infopers"
import Footer from "./components/Footer"
import Cmlg from "./components/Cmlg"
import Cmtc from "./components/Cmtc"
import ObjProf from "./components/ObjProf"
import Formation from "./components/Formation"
import Interet from "./components/Interet"
import './App.css'

function App() {


  return (
    <>
      <InfoPers name="Salah Eddine" bdate="01/01/2003" bloca="Casablanca" sf="Célibataire"/>
      <Cmlg/>
      <Cmtc/>
      <ObjProf/>
      <Formation/>
      <Interet/>
      <Footer/>
    </>
  )
}

export default App
