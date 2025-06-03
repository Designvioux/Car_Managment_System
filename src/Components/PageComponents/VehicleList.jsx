import React, { useState, useRef, useEffect } from 'react';
import './VehicleList.css';
import vehicle from './Images/car-audi-a3-audi-a4-car-3822c2bc08e2c2bce1d8ead0e70c7ddb.png';
import vehicle1 from '../Component/Images/car2.png';
import vehicle2 from '../Component/Images/car3.png';
// import vehicle3 from '../CarComponents/Images/car4.png';
import dott from './Images/dot.png';
import deleteicon from '../Component/Images/delete_24dp_000000_FILL1_wght400_GRAD0_opsz24 1.png';
import serach from './Images/Vector (1).png';
import edit from '../Component/Images/edit_24dp_000000_FILL1_wght400_GRAD0_opsz24 (1) 1.png';
import hand from '../Component/Images/search_hands_free_24dp_000000_FILL0_wght400_GRAD0_opsz24 1.png';
import car from './Images/directions_car_24dp_000000_FILL0_wght400_GRAD0_opsz24 (1) 1.png';
import DeletePopup from '../Component/DeletePopup.jsx';
import type from './Images/Line.png';

const vehicles = [
  { id: 1, name: 'Maruti Suzuki Ertiga', number: 'MH11AB7777', owner: 'Ganesh Jadhav', image: vehicle },
  { id: 2, name: 'Maruti Suzuki Ertiga', number: 'MH11AB7777', owner: 'Ganesh Jadhav', image: vehicle },
  { id: 3, name: 'Maruti Suzuki Ertiga', number: 'MH11AB7777', owner: 'Ganesh Jadhav', image: vehicle },
  { id: 4, name: 'Maruti Suzuki Ertiga', number: 'MH11AB7777', owner: 'Ganesh Jadhav', image: vehicle },
  { id: 5, name: 'Maruti Suzuki Ertiga', number: 'MH11AB7777', owner: 'Ganesh Jadhav', image: vehicle },
  { id: 6, name: 'Mahindra Pickup', number: 'MH14T8777', owner: 'Salman Pathan', image: vehicle1 },
  { id: 7, name: 'Mahindra Pickup', number: 'MH14T8777', owner: 'Salman Pathan', image: vehicle1 },
  { id: 8, name: 'Mahindra Pickup', number: 'MH14T8777', owner: 'Salman Pathan', image: vehicle1 },
  { id: 9, name: 'Mahindra Pickup', number: 'MH14T8777', owner: 'Salman Pathan', image: vehicle1 },
  { id: 10, name: 'Mahindra Pickup', number: 'MH14T8777', owner: 'Salman Pathan', image: vehicle1 },
  { id: 11, name: 'Tata LPT 1109', number: 'MH14T8777', owner: 'Salman Pathan', image: vehicle2 },
  { id: 12, name: 'Tata LPT 1109', number: 'MH14T8777', owner: 'Salman Pathan', image: vehicle2 },
  { id: 13, name: 'Tata LPT 1109', number: 'MH14T8777', owner: 'Salman Pathan', image: vehicle2 },
  { id: 14, name: 'Tata LPT 1109', number: 'MH14T8777', owner: 'Salman Pathan', image: vehicle2 },
  { id: 15, name: 'Tata LPT 1109', number: 'MH14T8777', owner: 'Salman Pathan', image: vehicle2 },
  { id: 16, name: 'Eicher Pro 6028', number: 'MH11AB7777', owner: 'Ganesh Jadhav', image: vehicle1 },
  { id: 17, name: 'Eicher Pro 6028', number: 'MH11AB7777', owner: 'Ganesh Jadhav', image: vehicle1 },
  { id: 18, name: 'Eicher Pro 6028', number: 'MH11AB7777', owner: 'Ganesh Jadhav', image: vehicle1 },
  { id: 19, name: 'Eicher Pro 6028', number: 'MH11AB7777', owner: 'Ganesh Jadhav', image: vehicle1 },
  { id: 20, name: 'Eicher Pro 6028', number: 'MH11AB7777', owner: 'Ganesh Jadhav', image: vehicle1 },
];

const VehicleList = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [search, setSearch] = useState('');
  const [menuVisibleId, setMenuVisibleId] = useState(null);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [vehicleToDelete, setVehicleToDelete] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const popupRef = useRef(null);
  const menuRefs = useRef({});

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
      if (menuVisibleId !== null && menuRefs.current[menuVisibleId]) {
        if (!menuRefs.current[menuVisibleId].contains(event.target)) {
          setMenuVisibleId(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuVisibleId, showPopup]);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleDeleteClick = (vehicle) => {
    setVehicleToDelete(vehicle);
    setShowDeletePopup(true);
  };

  const handleConfirmDelete = () => {
    console.log("Deleted vehicle:", vehicleToDelete);
    setShowDeletePopup(false);
    setVehicleToDelete(null);
  };

  const handleCancelDelete = () => {
    setShowDeletePopup(false);
    setVehicleToDelete(null);
  };

  const toggleMenu = (id) => {
    setMenuVisibleId(menuVisibleId === id ? null : id);
  };

  const filteredVehicles = vehicles.filter(
    (v) =>
      v.name.toLowerCase().includes(search.toLowerCase()) ||
      v.number.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="vehicle-list-container">
      <div className="vehicle-list-header">
        <h2>Vehicle List</h2>
        <div className="vehicle-controls">
          <span>
            <img className="searchimg" src={serach} alt="Search" />
            <input
              type="text"
              placeholder="Search or type"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </span>
          <div className="filter">
            <img
              className="filterimg"
              src={type}
              alt="filter icon"
              onClick={togglePopup}
            />
            <button className="filter-btn" onClick={togglePopup}>Car Type  </button>

            {showPopup && (
              <div className="popup-menu" ref={popupRef}>
                <div className="popup-item">Taxi</div>
                <div className="popup-item">MGV</div>
                <div className="popup-item">LGV</div>
                <div className="popup-item">HGV</div>
              </div>
            )}
          </div>
          <button className="add-btn">Add Vehicle</button>
        </div>
      </div>

      <div className="vehicle-grid">
        {filteredVehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className={`vehicle-card ${selectedId === vehicle.id ? 'selected' : ''}`}
            onClick={() => setSelectedId(vehicle.id)}
          >
            <div className="vehicle-info">
              <span className='vehiclename'>{vehicle.name}</span>
              <span
                className="dot"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMenu(vehicle.id);
                }}
              >
                <img src={dott} alt="Options" />
              </span>
              {menuVisibleId === vehicle.id && (
                <div
                  className="dot-popup-menu"
                  ref={(el) => (menuRefs.current[vehicle.id] = el)}
                >
                  <div className="menu-item">
                    <img className="icon edit-icon" src={edit} alt="Edit" />
                    <span>Edit</span>
                  </div>
                  <div
                    className="menu-item"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteClick(vehicle);
                    }}
                  >
                    <img className="icon delete-icon" src={deleteicon} alt="Delete" />
                    <span>Delete</span>
                  </div>
                </div>
              )}
            </div>

            <div>
              <span className="caricon">
                <img src={car} alt="Car Icon" />
              </span>
              <span className='number'>{vehicle.number}</span>
            </div>

            <div>
              <span className="handicon">
                <img src={hand} alt="Owner Icon" />
              </span>
              <span className='number'>{vehicle.owner}</span>
            </div>

            <img src={vehicle.image} alt={vehicle.name} />
          </div>
        ))}
      </div>

      {showDeletePopup && (
        <DeletePopup onDelete={handleConfirmDelete} onCancel={handleCancelDelete} />
      )}
    </div>
  );
};

export default VehicleList;
