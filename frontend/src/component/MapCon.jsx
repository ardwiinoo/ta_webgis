import{React, useState, useEffect} from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'
import { Polygon } from 'react-leaflet/Polygon'
import L from 'leaflet'
import { bantul } from '../data/bantul'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

const MapCon = () => {
    const [coordinates, setCoordinates] = useState([]);

    useEffect(() => {
        setCoordinates(bantul.map((row) => [row[0], row[1]]));
      }, []);

  return (
    <div className='px-3 mt-3 rounded-md relative'>
        <div className="max-w-full p-2 bg-base-300 rounded-md" style={{ position: 'relative', zIndex: 0 }}>
        <MapContainer center={[-7.941214, 110.248160]} zoom={13} style={{ width: '100%', height: '500px', borderRadius: '10px'}} scrollWheelZoom={false}>
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          <Marker position={[-7.941214, 110.248160]}>
            <Popup>
              Pondok Pesantren Ar Rahmah Kedungbule <br/>
              <a href="">Lihat detail</a>
            </Popup>
          </Marker>
          <Polygon positions={coordinates} />
        </MapContainer>
      </div>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold h-[40px] w-[40px] rounded-full top-10 right-10 absolute'>
      <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50"><path fill="currentColor" d="M25 1C11.766 1 1 11.766 1 25c0 13.233 10.766 24 24 24c13.233 0 24-10.767 24-24C49 11.766 38.233 1 25 1zm3 43.75V36h-6v8.75C13.375 43.443 6.557 36.625 5.25 28H14v-6H5.25C6.557 13.375 13.375 6.557 22 5.25V14h6V5.25C36.625 6.557 43.443 13.375 44.75 22H36v6h8.75C43.443 36.625 36.625 43.443 28 44.75z"/></svg>
      </button>
    </div>
  )
}

export default MapCon