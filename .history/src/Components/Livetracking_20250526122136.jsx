// // LiveTrackingMap.jsx
// import React, { useState, useEffect, useRef } from 'react';
// import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

// const containerStyle = {
//   width: '100%',
//   height: '100%',
//   borderRadius: '20px',
// };

// const center = {
//   lat: 18.5204, // Default: Pune
//   lng: 73.8567,
// };

// const libraries = ['places'];

// const LiveTrackingMap = ({ liveLocation }) => {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: '9e9518e39f50edbe91aa71e9765f76cc', // replace with your key
//     libraries,
//   });

//   const [markerPosition, setMarkerPosition] = useState(liveLocation || center);

//   // Simulate marker moving every 5 seconds (or use socket.io for real-time)
//   useEffect(() => {
//     if (liveLocation) {
//       setMarkerPosition(liveLocation);
//     }
//   }, [liveLocation]);

//   if (!isLoaded) return <div>Loading Map...</div>;

//   return (
//     <GoogleMap mapContainerStyle={containerStyle} center={markerPosition} zoom={15}>
//       <Marker position={markerPosition} />
//     </GoogleMap>
//   );
// };

// export default LiveTrackingMap;


import React, { useEffect, useRef, useState } from 'react';
import { loadMapplsSdk } from '../utils/utilsmap.js'; // adjust if needed

const MAPPLS_API_KEY = '9e9518e39f50edbe91aa71e9765f76cc'; // Use secure method in production

const LiveTrackingMap = ({ liveLocation }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markerInstance = useRef(null);
  const [sdkLoaded, setSdkLoaded] = useState(false);

  // Load Mappls SDK
  useEffect(() => {
    loadMapplsSdk(MAPPLS_API_KEY)
      .then(() => {
        if (window.mappls) {
          setSdkLoaded(true);
        } else {
          console.error('Mappls SDK loaded but window.mappls is undefined');
        }
      })
      .catch((err) => console.error('Failed to load Mappls SDK:', err));
  }, []);

  // Initialize Map and Marker
  useEffect(() => {
    if (!sdkLoaded || !mapRef.current || !window.mappls) return;

    const defaultCenter = { lat: 18.5204, lng: 73.8567 };
    const position = liveLocation || defaultCenter;

    // Create map instance if not already created
    if (!mapInstance.current) {
      mapInstance.current = new window.mappls.Map(mapRef.current, {
        center: position,
        zoom: 14,
      });

      // Add marker for live location
      markerInstance.current = new window.mappls.Marker({
        map: mapInstance.current,
        position: position,
        title: 'Live Location',
      });
    }
  }, [sdkLoaded]);

  // Update marker position when liveLocation changes
  useEffect(() => {
    if (!sdkLoaded || !mapInstance.current || !markerInstance.current || !liveLocation) return;

    markerInstance.current.setPosition(liveLocation);
    mapInstance.current.setCenter(liveLocation);
  }, [liveLocation, sdkLoaded]);

  return (
    <div
      ref={mapRef}
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '20px',
        minHeight: '400px', // Ensure visible height
      }}
    />
  );
};

export default LiveTrackingMap;



