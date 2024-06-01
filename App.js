import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Reports from './pages/Reports';
import Products from './pages/Products';
import Home from './pages/Home';

function App() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path='/home' component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Routes>
      </Router> */}
      <Home/>
    </>
  );
}

export default App;
