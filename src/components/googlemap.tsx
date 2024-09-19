import React, { memo } from 'react'
import { GoogleMap as GoogleMaps, LoadScript, Marker } from '@react-google-maps/api';
import home_pin from '../assets/home_pin.svg'

interface GoogleMapsApiKey {
    googleMapsApiKey: string;
}

const containerStyle = {
    width: '100%',
    height: '300px'
};

const center = {
    lat: 26.645107592707166,
    lng: 85.59459089203258
};

function GoogleMap() {
    const apiKey: GoogleMapsApiKey = {
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''
    };

    console.log(apiKey)
    return (
        <div className='w-[100%]'>
            <LoadScript googleMapsApiKey={apiKey.googleMapsApiKey}>
                <GoogleMaps mapContainerStyle={containerStyle} center={center} zoom={10}>
                    <Marker position={center}
                        icon={{
                            url: home_pin,
                            // scaledSize: new window.google.maps.Size(50, 50),
                        }}
                    />
                </GoogleMaps>
            </LoadScript>
        </div>
    )
}

export default memo(GoogleMap)
