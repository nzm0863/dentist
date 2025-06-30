import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import ReservationCalendar from './components/ReservationCalendar';

function App() {
  return (
    <Router basename="/sigotoru1">
      <div className="app">
        <Header />

        {/* ルート定義 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <ReservationCalendar />
      </div>
    </Router>
  );
}

export default App;
