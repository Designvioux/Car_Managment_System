import logo from './logo.svg';
import './App.css';
import './Component/CSS/Vehical_detail.css';
import VehicleDetail from './Component/Vehical-details'; 
import FuelExpenseReport from './Component/Fuel_Expenses_report';
function App() {
  return (
    <div className="App">
      <VehicleDetail/>
      <FuelExpenseReport/>
    </div>
  );
}

export default App;
