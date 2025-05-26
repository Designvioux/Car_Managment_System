import React from 'react';
import Dashboard from './DashboardNavbar';
import './CSS/Home.css';
import Search from './Search-top';
import stts from './icons/chart-bar-fill.png';
import trip from './icons/list-dashes-fill.png'

const Home = () => {
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
            <h2 className='s-heading'><img src={}></img></h2>
            <div className='Schedule-container'>schedule</div>
            <div className='CarDriverAva-container'>Car and Driver Availablity</div>
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
