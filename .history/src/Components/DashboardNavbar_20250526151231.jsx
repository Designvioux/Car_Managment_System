import React from 'react'
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

  return (
    <>
  <div className='Hamburger-Container'>
   <div className='left-hamburger'>
   <div className='Logo'><img src={logo} className='logo-img' alt="logo"/><p>Fleet Master</p></div>
    <ul>
       <li><a className='d-board'><img src={Dboard} ></img>Dashboard</a></li>
      <li className='d-list'> <img src={Assets} className='d-icon'></img><a>Vehicle Manag</a></li>
      <li className='d-list'><img src={Booking} className='d-icon'></img><a>Booking</a></li>
      <li className='d-list'><img src={Car}className='d-icon'></img><a>Sell Cars</a></li>
      <li className='d-list'><img src={BCar} className='d-icon'></img><a>Buy Cars</a></li>
      <li className='d-list'><img src={Services}className='d-icon'></img><a>Services</a></li>
      <li className='d-list'><img src={Calendar}className='d-icon'></img><a>Calendar</a></li>
      <li className='d-list'><img src={Msg}className='d-icon'></img><a>Messages</a></li>
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