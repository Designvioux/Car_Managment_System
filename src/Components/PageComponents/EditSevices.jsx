import React, { useState } from 'react';
import '../Component/EditServices.css';

const EditService = () => {
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
    <div className="edit-service-container">
      <div className="edit-form-header">
        <h2>Edit Service</h2>
        <div className="edit-form-buttons">
          <button className="edit-cancel-btn">Cancel</button>
          <button className="edit-save-btn">Save</button>
        </div>
      </div>
      <div className="edit-dropdown-row">
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
      <div className="edit-form-section">
        <div className='edit-formhead'>
          <h3>Service Details</h3>
        </div>

          <div className="edit-form-group">
            <label>Due Date</label>
            <input type="date" />
          </div>

          <div className="edit-form-group">
            <label>Service Task</label>
            <div className='border'>
            <select >
             <option value="">Service Task</option>
              <option>Tire Rotation</option>
              <option>Oil Change</option>
            </select>
            </div>
          </div>

          <div className="edit-form-group">
            <label>Garage Name</label>
            <div className='border'>
            <select >
             <option value="">Garage Name</option>
              <option>Gunkrupa</option>
              <option>Autotech</option>
            </select>
            </div>
            </div>
          

          <div className="edit-form-group">
            <label>Garage Contact Number</label>
             <input type="text" placeholder="Enter Contact Number" />
          </div>

          <div className="edit-form-group">
            <label>Next Service Date</label>
            <div className='border'>
            <select >
             <option>Next Service Date</option>
              <option>Monthly</option>
              <option>Quarterly</option>
            </select>
          </div>

          <div className="edit-form-group">
            <label>Kilometer Reading</label>
             <input type="number" placeholder="Enter Kilometers" />
          </div>

          <div className="edit-form-group">
            <label>Driver Name</label>
            <input type="text" placeholder="Enter Driver Name" />
          </div>

          <div className="edit-form-group">
            <label>Driver Contact Number</label>
            <input type="text" placeholder="Enter Contact Number" />
          </div>
      </div>
    </div>
    </div>
  );
};

export default EditService;
