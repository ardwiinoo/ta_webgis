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
  const [data, setData] = useState([]);
  useEffect(function () {
    document.title = "Map";

    async function getData() {
      try {
        const request = await fetch(
          `${env.API_URL}api/v1/location`
        );
        const response = await request.json();
        // console.log(response);
        setData(response?.data);
      } catch(err) {
        console.log(err)
      }
    }
    getData();
  } , []);

  console.log(data);

  return (
    <div className='App'>
      <Navbar/>
      <MapCon/>
      <Detail/>
      <ChartView />
      <Footer/>
    </div>
  );
}

export default App;
