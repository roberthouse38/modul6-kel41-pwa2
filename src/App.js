import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import LandingPage from './pages/LandingPage';

//Components
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
        <Router>
          <Routes>
            <Route exact path="/" element={<LandingPage/>} />
          </Routes>
      </Router>
    </div>
  );
}


export default App;
