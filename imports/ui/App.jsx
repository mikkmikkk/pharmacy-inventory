import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => (
  <Router>
    <div className="app">
      <nav>
        <h1>Pharmacy Inventory System</h1>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/medications">All Medications</Link></li>
          <li><Link to="/add-medication">Add New</Link></li>
          <li><Link to="/low-stock">Low Stock</Link></li>
        </ul>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<div>Dashboard Page - Coming Soon</div>} />
          <Route path="/medications" element={<div>Medication List - Coming Soon</div>} />
          <Route path="/add-medication" element={<div>Add Medication - Coming Soon</div>} />
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;