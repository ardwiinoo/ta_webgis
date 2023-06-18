import 'leaflet/dist/leaflet.css'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'
import L from 'leaflet'
import { useEffect, useState } from 'react'
import env from 'react-dotenv'
import Navbar from './component/Navbar'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

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
      <Navbar />
      <div className="max-w-full px-5 py-3 mx-auto" style={{ position: 'relative', zIndex: 0 }}>
        <MapContainer center={[-7.941214, 110.248160]} zoom={13} style={{ width: '100%', height: '500px', borderRadius: '10px'}} scrollWheelZoom={false}>
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          <Marker position={[-7.941214, 110.248160]}>
            <Popup>
              Pondok Pesantren Ar Rahmah Kedungbule <br/>
              <a href="">Lihat detail</a>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
