import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SafeMeButton from './components/SafeMeButton';
import Home from './pages/Home';
import Health from './pages/Health';
import Education from './pages/Education';
import Help from './pages/Help';
import Legal from './pages/Legal';
import Stories from './pages/Stories';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-['Poppins',sans-serif]">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/health" element={<Health />} />
            <Route path="/education" element={<Education />} />
            <Route path="/help" element={<Help />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/stories" element={<Stories />} />
          </Routes>
        </main>
        <Footer />
        <SafeMeButton />
      </div>
    </Router>
  );
}

export default App;