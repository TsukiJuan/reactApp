import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RepoSection from './components/RepoSection';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Main from './pages/main/Main';
import ProfileSection from './components/ProfileSection';


function App() {
  return (
    <BrowserRouter>
      <div className="main-screen">
        <Navbar />
        <div className="main-container">
          <RepoSection />
          <ProfileSection />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="main" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;




