import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Plan from './pages/Plan';
import Ticks from './pages/Ticks';
import SignUp from './pages/SignUp';
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
      <Route path="/ticks" element={<Ticks />}/>
      <Route path="/signup" element={<SignUp />}/>
    </Routes>
    <GlobalStyles />
  </Router>
  );

}

export default App;
