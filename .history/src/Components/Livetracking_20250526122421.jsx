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


