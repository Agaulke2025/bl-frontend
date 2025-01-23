import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Plan from './pages/Plan';
import Trips from './pages/Trips';
import LogIn from './pages/LoginIn';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { GlobalStyles } from './styles/Global.style';

function App() {
  return (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/plan" element={<Plan />}/>
      <Route path="/trips" element={<Trips />}/>
      <Route path="/login" element={<LogIn />}/>
    </Routes>
    <GlobalStyles />
  </Router>
  );

}

export default App;
