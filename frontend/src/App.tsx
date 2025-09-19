
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="min-h-screen bg-school-gradient">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<div className="p-8 text-center min-h-screen flex items-center justify-center bg-school-gradient-accent">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-primary-blue mb-4">About School Games</h1>
              <p className="text-lg text-neutral-gray-700">Coming Soon...</p>
            </div>
          </div>} />
          <Route path="/tournaments" element={<div className="p-8 text-center min-h-screen flex items-center justify-center bg-school-gradient-accent">
           
          </div>} />
          <Route path="/register" element={<div className="p-8 text-center min-h-screen flex items-center justify-center bg-school-gradient-accent">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-primary-blue mb-4">Register</h1>
              <p className="text-lg text-neutral-gray-700">Coming Soon...</p>
            </div>
          </div>} />
          <Route path="/login" element={<div className="p-8 text-center min-h-screen flex items-center justify-center bg-school-gradient-accent">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-secondary-teal mb-4">Login</h1>
              <p className="text-lg text-neutral-gray-700">Coming Soon...</p>
            </div>
          </div>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
