import React, { useState } from 'react';
import { UploadCloud } from 'lucide-react'; 
import './VehicleForm.css';
const VehicleForm = () => {
  const [formData, setFormData] = useState({
    vehicleNumber: '',
    date: '',
    fuelType: '',
    receiptNumber: '',
    totalFuel: '',
    totalExpense: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Optional: Add form submission logic here (e.g., API call)
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    console.log('Selected files:', files);
    // Optional: Add validation or upload logic
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-xl border border-gray-200"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Add Vehicle</h2>
        <div className="space-x-2">
          <button
            type="button"
            className="px-4 py-2 border border-purple-500 text-purple-600 rounded-md hover:bg-purple-50 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition"
          >
            Save
          </button>
        </div>
      </div>

      {/* Dropdown */}
      <div className="mb-6">
        <label htmlFor="vehicleNumber" className="block mb-1 font-medium">
          Vehicle Number
        </label>
        <select
          id="vehicleNumber"
          name="vehicleNumber"
          value={formData.vehicleNumber}
          onChange={handleChange}
          className="w-48 p-2 border rounded bg-white"
        >
          <option value="">Select Number</option>
          <option value="V1">Vehicle 1</option>
          <option value="V2">Vehicle 2</option>
        </select>
      </div>

      {/* Fuel Expense Section */}
      <div className="mb-4">
        <h3 className="text-md font-medium mb-4">Fuel Expense Report</h3>
        <div className="space-y-4">
          <input
            type="date"
            name="date"
            onChange={handleChange}
            value={formData.date}
            className="w-full p-2 bg-gray-100 rounded border"
          />

          <input
            type="text"
            name="fuelType"
            onChange={handleChange}
            value={formData.fuelType}
            placeholder="Enter Fuel Type"
            className="w-full p-2 bg-gray-100 rounded border"
          />

          <input
            type="text"
            name="receiptNumber"
            onChange={handleChange}
            value={formData.receiptNumber}
            placeholder="Enter Fuel Receipt Number"
            className="w-full p-2 bg-gray-100 rounded border"
          />

          <input
            type="number"
            name="totalFuel"
            onChange={handleChange}
            value={formData.totalFuel}
            placeholder="Enter Total Fuel Purchased"
            className="w-full p-2 bg-gray-100 rounded border"
          />

          <input
            type="number"
            name="totalExpense"
            onChange={handleChange}
            value={formData.totalExpense}
            placeholder="Enter Fuel Total Expense"
            className="w-full p-2 bg-gray-100 rounded border"
          />
        </div>
      </div>

      {/* Upload Section */}
      <div className="mt-6">
        <div className="border border-dashed border-gray-300 rounded-lg p-6 bg-gray-50 text-center">
          <UploadCloud className="mx-auto text-gray-400 mb-2" size={32} />
          <p className="font-medium">Drag and drop files here to upload.</p>
          <p className="text-sm text-gray-400">Only JPEG, PNG and SVG files are allowed.</p>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <label htmlFor="fileUpload" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 text-sm cursor-pointer">
            SELECT FILES…
          </label>
          <input
            type="file"
            id="fileUpload"
            accept=".jpg,.jpeg,.png,.svg"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
          <span className="text-gray-400 text-sm">Drop files here to upload</span>
        </div>
      </div>
    </form>
  );
};

export default VehicleForm;
