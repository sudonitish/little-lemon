import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Main/Navbar";
import BookingPage from './Components/Booking/BookingPage';
import HomePage from "./Components/Home/HomePage";
import About from "./Components/Home/About";
import Specials from "./Components/Home/Specials";
import Footer from "./Components/Main/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
