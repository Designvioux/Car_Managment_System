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
import { loadMapplsSdk } from '../utils/utilsmap.js'; // Adjust the path as needed

const MAPPLS_API_KEY = '9e9518e39f50edbe91aa71e9765f76cc'; // ⚠️ Move this to .env in production

const LiveTrackingMap = ({ liveLocation }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markerInstance = useRef(null);
  const [sdkLoaded, setSdkLoaded] = useState(false);
  const [loadingMap, setLoadingMap] = useState(true);

  // Load SDK once on mount
  useEffect(() => {
    let isMounted = true;

    loadMapplsSdk(MAPPLS_API_KEY)
      .then(() => {
        if (window.mappls && isMounted) {
          setSdkLoaded(true);
        } else {
          console.error('Mappls SDK loaded, but window.mappls is unavailable.');
        }
      })
      .catch((err) => {
        console.error('Mappls SDK failed to load:', err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Initialize map and marker
  useEffect(() => {
    if (!sdkLoaded || !mapRef.current || !window.mappls) return;

    const defaultPosition = { lat: 18.5204, lng: 73.8567 };
    const center = liveLocation || defaultPosition;

    // Initialize map only once
    if (!mapInstance.current) {
      mapInstance.current = new window.mappls.Map(mapRef.current, {
        center: center,
        zoom: 14,
      });

      mapInstance.current.addListener('load', () => {
        setLoadingMap(false);
      });

      // Add initial marker
      markerInstance.current = new window.mappls.Marker({
        map: mapInstance.current,
        position: center,
        title: 'Live Location',
      });
    }
  }, [sdkLoaded]);

  // Update marker on location change
  useEffect(() => {
    if (!sdkLoaded || !mapInstance.current || !markerInstance.current || !liveLocation) return;

    markerInstance.current.setPosition(liveLocation);
    mapInstance.current.setCenter(liveLocation);
  }, [liveLocation, sdkLoaded]);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '400px' }}>
      {loadingMap && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          backgroundColor: 'rgba(255,255,255,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          fontWeight: 'bold',
        }}>
          Loading map...
        </div>
      )}
      <div
        ref={mapRef}
        style={{
          width: '100%',
          height: '100%',
          minHeight: '400px',
          borderRadius: '20px',
          overflow: 'hidden',
        }}
      />
    </div>
  );
};

export default LiveTrackingMap;
