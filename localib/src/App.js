import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AddLocataire from './components/AddLocataire';
import DetailLocataire from './components/DetailLocataire';
import NavBare from './layaout/NavBare';
import LocatairePage from './pages/LocatairePage';
import VehiculePage from './pages/VehiculePage';
import AddVehicule from './components/AddVehicule';
import DetailVehicule from './components/DetailVehicule';
import Home from './pages/Home';


function App() {
  return (
    <>
      <Router>
        <NavBare />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locatairePage" element={<LocatairePage />} />
          <Route path="/vehiculePage" element={<VehiculePage />} />
          <Route path="/addLocataire" element={<AddLocataire />} />
          <Route path="/locataire/:id" element={<DetailLocataire />} />
          <Route path="/addVehicule" element={<AddVehicule />} />
          <Route path="/vehicule/:id" element={<DetailVehicule />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
