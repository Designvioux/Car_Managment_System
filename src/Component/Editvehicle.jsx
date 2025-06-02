import React from 'react';
import './EditVehicle.css';
import upload from './Images/Upload Icon.png';

const Editvehicle = () => {
  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Edit Vehicle</h2>

        <div className="editvehicle-form-buttons">
          <button className="editvehicle-cancel-btn">Cancel</button>
          <button className="editvehicle-save-btn">Save</button>
        </div>
      </div>

      <div className="editvehicle-dropdown">
        <select>
          <option>Select Number</option>
          <option>MH18AS7777</option>
          <option>MH18AS1234</option>
        </select>
      </div>

      <div className="editvehicle-form-section">
        <h3>Fuel Expense Report</h3>

          <label>Due Date</label>
          <input type="date" />
    
          <label>Fuel Type</label>
          <input type='text' placeholder="Fuel Type" />
        
          <label>Fuel Receipt Number</label>
          <input type='text' placeholder="Fuel Receipt Number" />
        
          <label>Total Fuel Purchased</label>
          <input type='text'placeholder="Total Fuel Purchased" />

          <label>Total Expense</label>
          <input type='text'placeholder="Total Expense" />

        <div className="editvehicle-upload-box">
          <div className="editvehicle-upload-icon"><img  className='editvehicle-uplodeimg' src={upload} /></div>
          <h6>Drag and drop files here to upload.</h6>
          <p>Only JPEG, PNG and SVG files are allowed.</p>
        </div>

        <div className="editvehicle-upload-footer">
          <button className="editvehicle-upload-btn">SELECT FILES...</button>
          <span className="editvehicle-drop-hint">Drop files here to upload</span>
        </div>
      </div>
    </div>
  );
};

export default Editvehicle;