
import './App.css';
import Home from './Home'
import Measure from './Measure'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/measure" element={<Measure />} />
      </Routes>
    </Router>
  );
}

export default App;
