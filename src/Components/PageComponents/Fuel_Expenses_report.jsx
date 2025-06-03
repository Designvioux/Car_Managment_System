import React, { useState } from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import "../Component/CSS/Fuel_expenses_report.css";

const FuelExpenseReport = () => {
  const [activeTab, setActiveTab] = useState("Daily");

  const dailyData = [
    { vehicleNo: 'MH11AB7777', name: 'Swift Dzire', date: '08/16/13', type: 'CNG', receipt: 2, fuel: '20 kg', expense: '1600/-' },
    { vehicleNo: 'MH11AB7777', name: 'Ertiga', date: '10/06/13', type: 'CNG', receipt: 1, fuel: '25 kg', expense: '2200/-' },
    { vehicleNo: 'MH11AB7777', name: 'Pick Up', date: '04/04/18', type: 'Diesel', receipt: 2, fuel: '30 L', expense: '3100/-' },
    { vehicleNo: 'MH11AB7777', name: 'Tata 1109', date: '05/30/14', type: 'Diesel', receipt: 3, fuel: '15 L', expense: '1550/-' },
    { vehicleNo: 'MH11AB7777', name: 'Eicher 6028', date: '04/21/12', type: 'Diesel', receipt: 2, fuel: '10 L', expense: '1050/-' },
    { vehicleNo: 'MH11AB7777', name: 'Eicher 6028', date: '08/21/15', type: 'Diesel', receipt: 1, fuel: '8 L', expense: '850/-' },
    { vehicleNo: 'MH11AB7777', name: 'Eicher 6028', date: '08/21/15', type: 'Diesel', receipt: 2, fuel: '27 L', expense: '2800/-' }
  ];
  const weeklyData = [
    { vehicleNo: 'MH11AB2222', name: 'Swift Dzire', date: '08/16/13', type: 'CNG', receipt: 2, fuel: '20 kg', expense: '1600/-' },
    { vehicleNo: 'MH11AB7777', name: 'Ertiga', date: '10/06/13', type: 'CNG', receipt: 1, fuel: '25 kg', expense: '2200/-' },
    { vehicleNo: 'MH11AB3333', name: 'Pick Up', date: '04/04/18', type: 'Diesel', receipt: 2, fuel: '30 L', expense: '3100/-' },
    { vehicleNo: 'MH11AB7777', name: 'Tata 1109', date: '05/30/14', type: 'Diesel', receipt: 3, fuel: '15 L', expense: '1550/-' },
    { vehicleNo: 'MH11AB9999', name: 'Eicher 6028', date: '04/21/12', type: 'Diesel', receipt: 2, fuel: '10 L', expense: '1050/-' },
    { vehicleNo: 'MH11AB7777', name: 'Eicher 6028', date: '08/21/15', type: 'Diesel', receipt: 1, fuel: '8 L', expense: '850/-' },
    { vehicleNo: 'MH11AB7777', name: 'Eicher 6028', date: '08/21/15', type: 'Diesel', receipt: 2, fuel: '27 L', expense: '2800/-' }
  ];
const Monthlydata = [
  { vehicleNo: 'MH11AB888', name: 'Swift Dzire', date: '08/16/13', type: 'CNG', receipt: 2, fuel: '20 kg', expense: '1600/-' },
    { vehicleNo: 'MH11AB9999', name: 'Ertiga', date: '10/06/13', type: 'CNG', receipt: 1, fuel: '25 kg', expense: '2200/-' },
    { vehicleNo: 'MH11AB5555', name: 'Pick Up', date: '04/04/18', type: 'Diesel', receipt: 2, fuel: '30 L', expense: '3100/-' },
    { vehicleNo: 'MH11AB5555', name: 'Tata 1109', date: '05/30/14', type: 'Diesel', receipt: 3, fuel: '15 L', expense: '1550/-' },
    { vehicleNo: 'MH11AB7777', name: 'Eicher 6028', date: '04/21/12', type: 'Diesel', receipt: 2, fuel: '10 L', expense: '1050/-' },
    { vehicleNo: 'MH11AB7777', name: 'Eicher 6028', date: '08/21/15', type: 'Diesel', receipt: 1, fuel: '8 L', expense: '850/-' },
    { vehicleNo: 'MH11AB7777', name: 'Eicher 6028', date: '08/21/15', type: 'Diesel', receipt: 2, fuel: '27 L', expense: '2800/-' }
];
  const renderTable = (data) => (
    <table className="report-table">
      <thead>
        <tr>
          <th>Vehicle Number</th>
          <th>Vehicle Name</th>
          <th>Date</th>
          <th>Fuel Type</th>
          <th>Fuel Receipt</th>
          <th>Total Fuel Purchased</th>
          <th>Total Expense</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <tr key={idx}>
            <td>{item.vehicleNo}</td>
            <td>{item.name}</td>
            <td>{item.date}</td>
            <td>{item.type}</td>
            <td>{item.receipt}</td>
            <td>{item.fuel}</td>
            <td>{item.expense}</td>
            <td className="action-icons">
              <FaEye className='Eye-icon' />
              <FaEdit className='Edit-icon' />
              <FaTrash className='Trash-icon' />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="report-container">
      <div className="report-header">
        <h2>Fuel Expense Report</h2>
        <div className="report-summary">Total Fuel Expense (23/05/2025) : 12,000/-</div>
        <div className="report-actions">
          <button className="download-btn">Daily Report</button>
          <button className="add-btn">Add Report</button>
        </div>
      </div>

      <div className="tab-buttons">
        <button className={activeTab === "Daily" ? "active" : ""} onClick={() => setActiveTab("Daily")}>Daily</button>
        <button className={activeTab === "Weekly" ? "active" : ""} onClick={() => setActiveTab("Weekly")}>Weekly</button>
        <button className={activeTab === "Monthly" ? "active" : ""} onClick={() => setActiveTab("Monthly")}>Monthly</button>
      </div>

      {activeTab === "Daily" && renderTable(dailyData)}
      {activeTab === "Weekly" && renderTable(weeklyData)}
      {activeTab === "Monthly" && renderTable(Monthlydata)}
    </div>
  );
};

export default FuelExpenseReport;