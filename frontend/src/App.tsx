
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import TournamentsPage from './pages/TournamentsPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-school-gradient">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tournaments" element={<TournamentsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
