import React , {useState , useRef,useEffect, use} from 'react';

import './CSS/Home.css';

import stts from './icons/chart-bar-fill.png';
import trip from './icons/list-dashes-fill.png'
import calendar from  './icons/calendar-dots-fill.png'
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import LiveTrackingMap from './Livetracking';

const Home = () => {

const [isOpen , setIsOpen] = useState(false);
const [selected , setSelected] = useState("Past 7 days");

const [view, setView] = useState('day'); // 'day' or 'week'
const [selectedTab , se] = useState('ongoing');

const ongoingTrips = [
  
    {id: 1 , name : 'Trip to Mumbai' , date: 'Today'},
    { id: 2 , name : 'Trip to Pune' , date :  'Tommorow'}
  
];

const upcomingTrips = [
  {id :3 , name : 'Trip to Goa' , date : 'In 3 days'},
  {id : 4 , name: 'Trips to delhi' , date : 'In 5 Days'}
];


const renderTrips = () => {
  const tripsToShow = filter  === 'ongoing' ? ongoingTrips : upcomingTrips ;

  return  tripsToShow.map((trip) =>{
<div key={trip.id} className='trip-card'>
  <h4>{trip.name}</h4>
  <p>{trip.date}</p>
</div>
  });
};

const dropdownRef= useRef();
  const options = [
    "Past 1 day",
    "Past 2 days",
    "Past 3 days",
    "Past 7 days",
    "Past 14 days",
    "Past 30 days",
    "Past 60 days",
    "Past 90 days",
    "Past 6 months",
    "Past 1 year",
  ];




  
    const renderScheduleContent = () => {
      if (view === 'day') {
        return <div>Day Schedule: Show today's appointments/camps</div>;
      } else {
        return <div>Week Schedule: Show weekly overview</div>;
      }
    };
  

  const toogleDropdown = () => setIsOpen(prev => !prev);
  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  
  
  return (
    <div className='Dashboard-Container'>
   

      <div className='main-content'>

        <div className='bottom-cont'>
        
     <div className='D-heading' ref={dropdownRef}>
      <div className='Stats-head'>
 
      <h2 className='s-heading'>      <img src={stts} className='sub-icons'></img> Statictics Overview 
      </h2>
      <div className='dropdown-wrapper'>
  <button className='dropdown-button' onClick={toogleDropdown}>
    {selected} <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
  </button>
  {isOpen && (
    <div className='dropdown-menu'>
      {options.map((option) => (
        <div
          key={option}
          className='dropdown-item'
          onClick={() => handleSelect(option)}
        >
          {option}
        </div>
      ))}
    </div>
  )}
</div>

      </div>
          <div className='H-left'>
            
            <div className='Statictics-container'>1</div>
            <div className='Trips-container'>2</div>
            <div className='Statictics-container'>3</div>
            <div className='Trips-container'>4</div>

          </div>
          <div className='Trips-Container'>
          <h2 className='s-heading'>  <img className='sub-icons' src={trip}></img> Trips </h2>
          <div className='trip-buttons'>
            <button className={`trip-btn ${filter === 'upcoming' ? 'active' : ''}`}
            onClick={() => setFilter('upcoming')}
            >
              Next 5 days
            </button>
             </div>
          <div className='Trips-box'>
    {renderTrips()}
          </div>
          
          </div>
          </div>

          <div className='right-side'>
            <div className='Map-container'>
            <LiveTrackingMap liveLocation={{ lat: 18.5204, lng: 73.8567 }} /> {/* Replace with real-time location */}
            </div>
            <div className="schedule-header">
        <h2 className='s-heading'>
          <img src={calendar} className='sub-icons' alt="calendar" />
          Schedule
        </h2>
        <div className="toggle-buttons">
          <button
            className={view === 'day' ? 'active' : ''}
            onClick={() => setView('day')}
          >
            Day
          </button>
          <button
            className={view === 'week' ? 'active' : ''}
            onClick={() => setView('week')}
          >
            Week
          </button>
        </div>
      </div>

      <div className='Schedule-container'>
        {renderScheduleContent()}
      </div>
            <div className='CarDriverAva-container'><h2> Car and Driver Availablity</h2></div>
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
