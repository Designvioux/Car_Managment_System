import React from "react";
import "./DeletePopup.css";
import deleteicon from './Images/Featured icon.png';

const DeletePopup = ({ onDelete, onCancel }) => {
  return (
    <div className="delete-popup-overlay">
      <div className="delete-popup-modal">
        <img
          src={deleteicon}
          alt="delete"
          className="delete-popup-icon"
        />
        <h2>Delete this vehicle</h2>
        <p>Are you sure you want to delete this vehicle? This action cannot be undone.</p>
        <button className="delete-btn" onClick={onDelete}>Delete</button>
        <button className="pop-cancel-btn" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default DeletePopup;
