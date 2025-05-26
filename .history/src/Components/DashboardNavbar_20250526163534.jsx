import React, { useState } from 'react';
import "./CSS/DashboardNavbar.css"
import Dboard from './icons/dashboard icon.png'
import Assets from './icons/wheel.png';
import Booking from  './icons/car.png';
import Car from './icons/shop.png';
import BCar from './icons/cart.png';
import Services from './icons/Line.png';
import Calendar from './icons/calendar.png';
import Msg from './icons/msg.png';
import Setting from './icons/setting.png';
import Logout from './icons/logout.png';
import logo from './Images/logo.png'
const Dashboard = () => {

  const [activeDropdown, setActiveDropdown] = useState(null);
  const toggleDropdown = (menuName) => {
    setActiveDropdown(prev => prev === menuName ? null : menuName);
  };

  return (
    <>
 <div className='Hamburger-Container'>
      <div className='left-hamburger'>
        <div className='Logo'>
          <img src={logo} className='logo-img' alt="logo" />
          <p>Fleet Master</p>
        </div>

        <ul>
  {/* Dashboard (no dropdown) */}
  <li>
    
    <a className='d-board'><img src={Dboard} alt="Dashboard" className='d-img'  />Dashboard</a>
  </li>

  {/* Vehicle Management */}
  <li className='d-list'>
    <div className='d-item' onClick={() => toggleDropdown('vehicle')}>
      <img src={Assets} className='d-icon' alt="Vehicle" />
      <span>Vehicle Management</span>
    </div>
    {activeDropdown === 'vehicle' && (
      <ul className='dropdown'>
        <li><a href='/add-vehicle'>Add Vehicle</a></li>
        <li><a href='/vehicle-list'>Vehicle List</a></li>
        <li><a href='/maintenance'>Maintenance</a></li>
      </ul>
    )}
  </li>

  {/* Booking */}
  <li className='d-list'>
    <div className='d-item' onClick={() => toggleDropdown('booking')}>
      <img src={Booking} className='d-icon' alt="Booking" />
      <span>Booking</span>
    </div>
    {activeDropdown === 'booking' && (
      <ul className='dropdown'>
        <li><a href='/new-booking'>New Booking</a></li>
        <li><a href='/booking-history'>Booking History</a></li>
      </ul>
    )}
  </li>

  {/* No dropdowns below */}
  <li className='d-list'>
  <div className='d-item' onClick={() => toggleDropdown('sell')}>
    <img src={Car} className='d-icon' alt="Sell" />
    <span>Sell Cars</span>
    </div>
    {activeDropdown === 'sell' && (
      <ul className='dropdown'>
        <li><a href='/new-booking'>New Booking</a></li>
        <li><a href='/booking-history'>Booking History</a></li>
      </ul>
    )}
  </li>

  <li className='d-list'>
  <div className='d-item' onClick={() => toggleDropdown('buy')}>
    <img src={BCar} className='d-icon' alt="Buy" />
    <span>Buy Cars</span>
    </div>
    {activeDropdown === 'buy' && (
      <ul className='dropdown'>
        <li><a href='/new-booking'>New Booking</a></li>
        <li><a href='/booking-history'>Booking History</a></li>
      </ul>
    )}
  </li>

  <li className='d-list'>
  <div className='d-item' onClick={() => toggleDropdown('services')}>
    <img src={Services} className='d-icon' alt="Services" />
    <span>Services</span>
    </div>
    {activeDropdown === 'services' && (
      <ul className='dropdown'>
        <li><a href='/new-booking'>New Booking</a></li>
        <li><a href='/booking-history'>Booking History</a></li>
      </ul>
    )}
  </li>

  <li className='d-list'>
  <div className='d-item' onClick={() => toggleDropdown('services')}>
    <img src={Calendar} className='d-icon' alt="Calendar" />
    <span>Calendar</span>
    <
  </li>

  <li className='d-list'>
    <img src={Msg} className='d-icon' alt="Messages" />
    <a>Messages</a>
  </li>
</ul>

      </div>
   <div className='last-content'>
    <ul>
     <li className='d-list'><img src={Setting} className='l-icon'></img><a>Setting</a></li> 
     <li className='d-list'><img src={Logout}className='l-icon'></img>  <a>Log out</a></li>  
      </ul>

      </div>

   </div>
    
      </>

  )
 

}

export default Dashboard;