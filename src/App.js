import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom';

//pages
import LandingPage from './pages/landingpage';

function App() {
  return (
      <main>
        <Routes>
          <Route path='/' element ={<LandingPage />} />
        </Routes>
      </main>
  );
}
export default App;