import Navbar from './components/Navbar/Navbar';
import './App.css';
import Cart from './pages/cart/Cart';
import { Route, Routes } from 'react-router-dom';
import PlaceOrder from './pages/placeOrder/PlaceOrder';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import LoginPopup from './components/Login/LoginPopup';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPopup  setShowLogin={setShowLogin} />}

      <div className="App">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;