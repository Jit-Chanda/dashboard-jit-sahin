import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import Sidebar from './components/sidebar/sidebar.component';
import Dashboard from './components/dashboard/dashboard.component';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_page">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
