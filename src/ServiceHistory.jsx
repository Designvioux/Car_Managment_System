import React, { useState, useRef, useEffect } from 'react';
import { FaSearch, FaFilter, FaTrashAlt, FaEdit, FaDownload, FaExclamationTriangle } from 'react-icons/fa';
import './ServiceHistory.css';
import searchicon from './Images/Vector.png';
import car from './Images/Line.png';

const ServiceHistory = () => {
  const [activeTab, setActiveTab] = useState("Due");
  const [selectedId, setSelectedId] = useState(null);
  const [search, setSearch] = useState('');
  const [menuVisibleId, setMenuVisibleId] = useState(null);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [vehicleToDelete, setVehicleToDelete] = useState(null);
  const [showPopup, setshowPopup] = useState(false);

  const popupRef = useRef(null);
  const menuRefs = useRef({});

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setshowPopup(false);
      }
      if (menuVisibleId !== null && menuRefs.current[menuVisibleId]) {
        if (!menuRefs.current[menuVisibleId].contains(event.target)) {
          setMenuVisibleId(null);
        }
      }
    };

    // ✅ Fix added here
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuVisibleId, showPopup]);

  const togglePopup = () => {
    setshowPopup(!showPopup);
  };

  const handleDeleteClick = (vehicle) => {
    setVehicleToDelete(vehicle);
    setShowDeletePopup(true);
  };

  const renderTable = (data) => (
    <table className="service-table">
      <thead>
        <tr>
          <th>Vehicle</th>
          <th>Service Task</th>
          <th>Status</th>
          <th>Garage Name</th>
          <th>Last Completed</th>
          <th>Due Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.vehicle}</td>
            <td>{item.task}</td>
            <td className="status">
              {item.status} <FaExclamationTriangle className="warning-icon" />
            </td>
            <td>{item.garage}</td>
            <td>{item.lastCompleted}</td>
            <td>{item.dueDate}</td>
            <td className="actions">
              <FaDownload className="action-icon" />
              <FaEdit className="action-icon" />
              <FaTrashAlt className="action-icon delete" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const duesoon = [
    { vehicle: 'MH11AB7777 (Maruti Ertiga)', task: 'Tire Rotation', status: 'Due Soon', garage: 'Gurukrupa', lastCompleted: '03/04/16', dueDate: '08/16/13' },
    { vehicle: 'MH11AB7777 (Maruti Ertiga)', task: 'Oil Change', status: 'Due Soon', garage: 'Auto Doctor', lastCompleted: '01/31/14', dueDate: '10/06/13' },
    { vehicle: 'MH11AB7777 (Maruti Ertiga)', task: 'Break Inspection', status: 'Due Soon', garage: 'Showroom', lastCompleted: '07/27/13', dueDate: '04/04/18' },
    { vehicle: 'MH11AB7777 (Maruti Ertiga)', task: 'Battery Replacement', status: 'Due Soon', garage: 'Gurukrupa', lastCompleted: '12/10/13', dueDate: '05/30/14' },
    { vehicle: 'MH11AB7777 (Maruti Ertiga)', task: 'A/C System Test', status: 'Due Soon', garage: 'Gurukrupa', lastCompleted: '01/15/12', dueDate: '04/21/12' },
    { vehicle: 'MH11AB7777 (Maruti Ertiga)', task: 'A/C System Test', status: 'Due Soon', garage: 'Gurukrupa', lastCompleted: '01/28/17', dueDate: '08/21/15' },
    { vehicle: 'MH11AB7777 (Maruti Ertiga)', task: 'A/C System Test', status: 'Due Soon', garage: 'Gurukrupa', lastCompleted: '01/28/17', dueDate: '08/21/15' },
  ];

  const overdue = [
    { vehicle: 'MH11AB7777 (Maruti Ertiga)', task: 'Tire Rotation', status: 'Overdue', garage: 'Gurukrupa', lastCompleted: '03/04/16', dueDate: '08/16/13' },
    { vehicle: 'MH11AB7777 (Maruti Ertiga)', task: 'Oil Change', status: 'Overdue', garage: 'Showroom', lastCompleted: '01/31/14', dueDate: '10/06/13' },
    { vehicle: 'MH11AB7777 (Maruti Ertiga)', task: 'Break Inspection', status: 'Overdue', garage: 'Auto Doctor', lastCompleted: '07/27/13', dueDate: '04/04/18' },
    { vehicle: 'MH11AB7777 (Maruti Ertiga)', task: 'Battery Replacement', status: 'Overdue', garage: 'Gurukrupa', lastCompleted: '12/10/13', dueDate: '05/30/14' },
    { vehicle: 'MH11AB7777 (Maruti Ertiga)', task: 'A/C System Test', status: 'Overdue', garage: 'Gurukrupa', lastCompleted: '01/15/12', dueDate: '04/21/12' },
    { vehicle: 'MH11AB7777 (Maruti Ertiga)', task: 'A/C System Test', status: 'Overdue', garage: 'Gurukrupa', lastCompleted: '01/28/17', dueDate: '08/21/15' },
    { vehicle: 'MH11AB7777 (Maruti Ertiga)', task: 'A/C System Test', status: 'Overdue', garage: 'Gurukrupa', lastCompleted: '01/28/17', dueDate: '08/21/15' },
    
  ];

  const completed = [
    { vehicle: 'MH11AB7777 (Maruti Ertiga)', task: 'Tire Rotation', status: 'Completed', garage: 'Gurukrupa', lastCompleted: '03/04/16', dueDate: '08/16/13' },
    { vehicle: 'MH11AB7777 (Maruti Ertiga)', task: 'Oil Change', status: 'Completed', garage: 'Showroom', lastCompleted: '01/31/14', dueDate: '10/06/13' },
    { vehicle: 'MH11AB7777 (Maruti Ertiga)', task: 'Break Inspection', status: 'Completed', garage: 'Auto Doctor', lastCompleted: '07/27/13', dueDate: '04/04/18' },
    { vehicle: 'MH11AB7777 (Maruti Ertiga)', task: 'Battery Replacement', status: 'Completed', garage: 'Gurukrupa', lastCompleted: '12/10/13', dueDate: '05/30/14' },
    { vehicle: 'MH11AB7777 (Maruti Ertiga)', task: 'A/C System Test', status: 'Completed', garage: 'Gurukrupa', lastCompleted: '01/15/12', dueDate: '04/21/12' },
    { vehicle: 'MH11AB7777 (Maruti Ertiga)', task: 'A/C System Test', status: 'Completed', garage: 'Gurukrupa', lastCompleted: '01/28/17', dueDate: '08/21/15' },
    { vehicle: 'MH11AB7777 (Maruti Ertiga)', task: 'A/C System Test', status: 'Completed', garage: 'Gurukrupa', lastCompleted: '01/28/17', dueDate: '08/21/15' },
    
  ];

  return (
    <div className="service-history-container">
      <div className="header">
        <h2 className='head-service'>Service History</h2>
        <div className="controls">
          <div className="search-bar">
            <img className="icon-one" src={searchicon} alt="search" />
            <input type="text" placeholder="Search or type" />
          </div>
          <div className='text-one'>
            <img 
              className="icon2"
              src={car}
               alt="car"/>

          <button className="filter-btn " onClick={togglePopup}>  Car Type
          </button>
          {showPopup && (
            <div className="car-popup" ref={popupRef}>
              <div className="car-popup-item">Taxi</div>
              <div className="car-popup-item">MGV</div>
              <div className="car-popup-item">LGV</div>
              <div className="car-popup-item">HGV</div>
            </div>

          )}
          </div>
          <button className="add-btn">Add Service</button>
        </div>
      </div>

      <div className="tabs">
        <button className={activeTab === "Due" ? "active" : ""} onClick={() => setActiveTab("Due")}>Due Soon</button>
        <button className={activeTab === "overdue" ? "active" : ""} onClick={() => setActiveTab("overdue")}>Overdue</button>
        <button className={activeTab === "completed" ? "active" : ""} onClick={() => setActiveTab("completed")}>Completed</button>
      </div>

      {activeTab === "Due" && renderTable(duesoon)}
      {activeTab === "overdue" && renderTable(overdue)}
      {activeTab === "completed" && renderTable(completed)}
    </div>
  );
};

export default ServiceHistory;