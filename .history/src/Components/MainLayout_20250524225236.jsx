import React from 'react';
import Dashboard from './DashboardNavbar';
import './CSS/Home.css';
import Search from './Search-top';

const Main = () => {
  return (
    <div className='Main-Container'>
      <div className='dashboard-wrapper'>
        <Dashboard />
      </div>

      <div className='main-content'>
        <div className='search-top'>
          <Search />
        </div>

      
      </div>
    </div>
  );
};

export default Home;
