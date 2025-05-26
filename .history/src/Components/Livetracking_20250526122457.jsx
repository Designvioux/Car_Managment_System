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



import React, { useEffect, useRef } from 'react';

const LiveTrackingMap = ({ liveLocation }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markerInstance = useRef(null);

  useEffect(() => {
    if (window.mappls && mapRef.current && !mapInstance.current) {
      // Initialize map
      mapInstance.current = new window.mappls.Map(mapRef.current, {
        center: liveLocation || { lat: 18.5204, lng: 73.8567 }, // Pune default
        zoom: 14,
      });

      // Add marker
      markerInstance.current = new window.mappls.Marker({
        map: mapInstance.current,
        position: liveLocation || { lat: 18.5204, lng: 73.8567 },
        title: 'Live Location',
      });
    }

    if (markerInstance.current && liveLocation) {
      // Update marker position on liveLocation change
      markerInstance.current.setPosition(liveLocation);
      mapInstance.current.setCenter(liveLocation);
    }
  }, [liveLocation]);

  return (
    <div
      ref={mapRef}
      style={{ width: '100%', height: '100%', borderRadius: '20px' }}
    />
  );
};

export default LiveTrackingMap;
