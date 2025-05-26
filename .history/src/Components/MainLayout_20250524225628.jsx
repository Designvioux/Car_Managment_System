import React from 'react';
import Dashboard from './DashboardNavbar';
import './CSS/Home.css';
import Search from './Search-top';
import {Outlet} from 'react router dom';
const Main = () => {
  return (
    <div className='Main-Container'>
      <div className='dashboard-wrapper'>
        <Dashboard />
      </div>

     
        <div className='search-top'>
          <Search />
        </div>
        {here are page components  like home}
<div className='Page-Components'>
  <Outlet/>
</div>
      
      </div>
  
  );
};

export default Main;
