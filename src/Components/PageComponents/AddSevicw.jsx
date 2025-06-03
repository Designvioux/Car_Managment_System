import React, { useState } from 'react';
import '../Component/AddService.css';
import calender from '../Component/Images/calendar_month_24dp_000000_FILL0_wght400_GRAD0_opsz24 (2) 1.png';

const AddServiceForm = () => {

  const [selectedVehicle, setSelectedVehicle] = useState('');
    const [vehicleNumbers, setVehicleNumbers] = useState([]);
    const [selectedNumber, setSelectedNumber] = useState('');
  
    const handleVehicleChange = (e) => {
      const value = e.target.value;
      setSelectedVehicle(value);
  
      
      const vehicleMap = {
        'Ertiga': ['MH18AS7777', 'MH18AS1234'],
        'Mahindra Pickup': ['MH14XY0001', 'MH14XY0002'],
        'Tata LPT 1109': ['MH12ZZ1111', 'MH12ZZ2222'],
        'Eicher Pro 6028': ['MH13QQ3333', 'MH13QQ4444']
      };
  
      setVehicleNumbers(vehicleMap[value] || []);
      setSelectedNumber(''); 
    };
  
    const handleNumberChange = (e) => {
      setSelectedNumber(e.target.value);
    };
  return (
    <div className="service-form-container">
      <div className="form-header">
        <h2>Add Service</h2>
        <div className="form-buttons">
          <button className="cancel-btn">Cancel</button>
          <button className="save-btn">Save</button>
        </div>
      </div>


      <div className="dropdown-row">
        <select value={selectedVehicle} onChange={handleVehicleChange}>
          <option value="">Select Vehicle Model</option>
          <option value="Ertiga">Ertiga</option>
          <option value="Mahindra Pickup">Mahindra Pickup</option>
          <option value="Tata LPT 1109">Tata LPT 1109</option>
          <option value="Eicher Pro 6028">Eicher Pro 6028</option>
        </select>
        <select value={selectedNumber} onChange={handleNumberChange}>
          <option value="">Select Number</option>
          {vehicleNumbers.map((number, index) => (
            <option key={index} value={number}>{number}</option>
          ))}
        </select>
      </div>

      <div className="form-section">
      <div className='formhead'>
        <h3>Service Details</h3>
      </div>
        <label>Due Date</label>
        <input type="date" />
        

        <label>Service Task</label>
        
        <div className='selector'> 
       <select >
       <option value="">Service Task</option>
              <option>Tire Rotation</option>
              <option>Oil Change</option>
            </select>
</div>



        <label>Garage Name</label>
        
        <div className='selector'> 
        <select >
        <option value="">Garage Name</option>
              <option>Gunkrupa</option>
              <option>Autotech</option>
            </select>
        </div>


        <label>Garage Contact Number</label>
        <input type="text" placeholder="Enter Contact Number" />

         
        <label>Next Service Date</label>
        <div className='selector'>
        <span><select className='back'>
        <option value="">Next Service Date</option>
              <option>Monthly</option>
              <option>Quarterly</option>
        </select></span>
        <span><img className='calenderimg' src={calender}/></span>
        </div>

        <label>Kilometer Reading</label>
        <input type="number" placeholder="Enter Kilometers" />

        <label>Driver Name</label>
        <input type="text" placeholder="Enter Driver Name" />

        <label>Driver Contact Number</label>
        <input type="text" placeholder="Enter Contact Number" />
      </div>
    </div>
  );
};

export default AddServiceForm;