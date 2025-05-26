import React , {useState , useRef,useEffect} from 'react';

import './CSS/Home.css';

import stts from './icons/chart-bar-fill.png';
import trip from './icons/list-dashes-fill.png'
import calendar from  './icons/calendar-dots-fill.png'

const Home = () => {

const [isOpen , setIsOpen] = useState(false);
const [selected , setSelected] = useState("Past 7 days")

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

  const toogleDeopdown = () => setIsOpen(isOpen);
  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
  };

  useEffect (()=>{
    const handleClickOutside = (e)=>{
      if(dropdownRef.current && !dropdownRef.current.contains(e.target)){
        setIsOpen(false);
      }
    };
    document,addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown" , handleClickOutside);
  }, []);
  return (
    <div className='Dashboard-Container'>
   

      <div className='main-content'>

        <div className='bottom-cont'>
        
     <div className='D-heading'>
 
      <h2 className='s-heading'>      <img src={stts} className='sub-icons'></img> Statictics Overview</h2>
          <div className='H-left'>
            
            <div className='Statictics-container'>1</div>
            <div className='Trips-container'>2</div>
            <div className='Statictics-container'>3</div>
            <div className='Trips-container'>4</div>

          </div>
          <div className='Trips-Container'>
          <h2 className='s-heading'>  <img className='sub-icons' src={trip}></img> Trips </h2>
          <div className='Trips-box'>

          </div>
          
          </div>
          </div>

          <div className='right-side'>
            <div className='Map-container'>map</div>
            <h2 className='s-heading'><img src={calendar} className='sub-icons'></img> Schedule</h2>
            <div className='Schedule-container'></div>
            <div className='CarDriverAva-container'><h2> Car and Driver Availablity</h2></div>
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
