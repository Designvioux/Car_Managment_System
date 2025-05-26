import React from 'react';

import './CSS/Home.css';


const Home = () => {
  return (
    <div className='Home-Container'>
   

        <div className='bottom-cont'>
          <div className='H-left'>
            <div className='Statictics-container'>1</div>
            <div className='Trips-container'>2</div>
            <div className='Statictics-container'>3</div>
            <div className='Trips-container'>4</div>

            <div className='Trip-Cont'>
              <div className='Trip-Updates'></div>
            </div>
          </div>

          <div className='right-side'>
            <div className='Map-container'>map</div>
            <div className='Schedule-container'>schedule</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
