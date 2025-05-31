import React, { useState } from 'react';
import './AddVehicle.css'; 

const AddVehicle = () => {
  const [formData, setFormData] = useState({
    carName: '',
    carNumber: '',
    carAC: '',
    fuelType: '',
    seatingCapacity: '',
    driverName: '',
    driverContact: '',
    driverLicense: '',
    driverAadhaar: '',
    driverBloodGroup: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container">
     <div className='head-bar'> <h2 className='head-service'>Add Vehicle</h2>

           <div className="buttons">
        <button className="cancel">Cancel</button>
        <button className="save">Save</button>
      </div>
      </div> 
      <div className="form-grid">
        <div className='section-grid'>

        
        <div className="section">
          <h3>Car Details</h3>
          <span className='input-text '>Car Name</span>
          <input name="carName" placeholder="Enter Car Name"  onChange={handleChange} className='Carname'/>
          <span className='input-text '>Car Number</span>
          <input name="carNumber" placeholder="Enter Car Number" onChange={handleChange}className='Carname' />
          <span className='input-text  '>Car AC /Non AC</span>
          <select name="carAC" onChange={handleChange} className='Ac'>
            <option>AC / Non AC</option>
            <option value="AC">AC</option>
            <option value="Non AC">Non AC</option>
          </select>
          <span className='input-text '>Fuel Type</span>
          <select name="fuelType" onChange={handleChange}className='Ac'>
            <option>Enter Fuel type</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
          </select>
          <span className='input-text '>Seating Capacity</span>
          <input name="seatingCapacity" placeholder="Enter Seating Capacity" onChange={handleChange} className='Carname'/>
          <span className='input-text '>Car Documents (PDF only)</span>

          {['Fitness Certificate', 'Insurance', 'Tax', 'PUC', 'Permit'].map(doc => (
            <div key={doc} className="file-row">
              
              
              <div className='files-col'> <label>{doc}</label>
                
              <input type="file" accept="application/pdf" />
              </div>
               <div className='files-col'>
              <label>Expiry Date</label>
              <input type="date" /> 
              

              </div>
              
            </div>
           
          ))}
          
          
        </div>
        </div>
        
          
             <div className="section-two">
            <div className='driver-one'>
          <h3>Driver Details</h3>
          </div>
           
          <span  className='input-text '>Driver Name</span>
             
          <input name="driverName" placeholder="Enter Driver Name" onChange={handleChange} className='Carname'/>
          <span  className='input-text '>Driver Contact Number</span>
          <input name="driverContact" placeholder="Enter Contact Number" onChange={handleChange}className='Carname' />
          <span  className='input-text '>Driver License Number</span>
          <input name="driverLicense" placeholder="Enter License Number" onChange={handleChange}className='Carname' />
          <span  className='input-text '>Driver Aadhaar Number</span>
          <input name="driverAadhaar" placeholder="Enter Aadhaar Number" onChange={handleChange}className='Carname' />
           <span  className='input-text '>Driver Blood Group</span>
           <input name="driverBloodGroup" placeholder="Enter Blood Group" onChange={handleChange} className='Carname'/>
        </div>
      </div>
    

      
    </div>
  );
};

export default AddVehicle;
