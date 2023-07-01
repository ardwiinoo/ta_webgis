import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from 'react'
import env from 'react-dotenv'
import Navbar from './component/Navbar'
import MapCon from './component/MapCon'
import Footer from './component/Footer'
import Information from './component/Information'
import ChartView from './component/Chart'
import Detail from './component/Detail'

function App() {

  return (
    <div className="App bg-base-300">
      <Navbar/>
      <MapCon/>
      <Footer/>
    </div>
  );
}

export default App;
