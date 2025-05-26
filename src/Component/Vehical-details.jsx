import React from "react";
import "../Component/CSS/Vehical_detail.css";

export default function VehicleDetail() {
  return (
    <div className="container">
      <main className="main-content">
        <div className="header">
          <h2>View Detail</h2>
          <div className="actions">
            <button className="btn delete">Delete</button>
            <button className="btn edit">Edit</button>
          </div>
        </div>

        <div className="content-grid">
          <div className="details-card">
            <table>
              <tbody>
            <h3>Car Details</h3>
                <tr><td>Car Number</td><td>MH11AB7777</td></tr>
                <tr><td>Car Name</td><td>Maruti Suzuki Ertiga</td></tr>
                <tr><td>Car AC/NonAC</td><td>AC</td></tr>
                <tr><td>Fuel Type</td><td>Petrol</td></tr>
                <tr><td>Seating capacity</td><td><strong>4+1</strong></td></tr>
              </tbody>
            </table>
</div>
          <div className="documents-card">
            <h3>Car Documents</h3>
            <table>
              <tbody>
                <tr><td>Fitness</td><td className="link">View Document</td><td>12/05/2025</td></tr>
                <tr><td>Insurance</td><td className="link">View Document</td><td>11/05/2025</td></tr>
                <tr><td>Tax</td><td className="link">View Document</td><td>11/05/2025</td></tr>
                <tr><td>PUC</td><td className="link">View Document</td><td>11/05/2025</td></tr>
                <tr><td>Permit</td><td className="link">View Document</td><td>11/05/2025</td></tr>
              </tbody>
            </table>
          </div>
           <div className="details-card">
            <h3>Driver Details</h3>
            <table>
              <tbody>
                <tr><td>Name</td><td>Alex Noman</td></tr>
                <tr><td>Contact Number</td><td>+91 1234567899</td></tr>
                <tr><td>License Number</td><td>MH11 20250012345</td></tr>
                <tr><td>Aadhaar Card Number</td><td>9157 4596 7888</td></tr>
                <tr><td>Blood Group</td><td>B+</td></tr>
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}
