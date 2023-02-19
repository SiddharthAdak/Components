import './App.css'
import Navbar from "./navComponents/Navbar"
import Dashboard from './pages/Dashboard'
import { Routes, Route } from 'react-router-dom'
import Page1_404 from './pages/Page1_404';

import Navbar2 from './navComponents2/Navbar2';
function App() {

  return (
    <div className="App">
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path = "/" element = {<Dashboard />} />
        <Route path = "404Page1" element = {<Page1_404 />} />
        
      </Routes>
    </div>
  )
}

export default App
