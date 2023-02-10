import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import HomePage from './Pages/HomePage';
import Signup from './Pages/Signup';
import Contact from './Pages/Contact';
import Navbar from './Components/ChatBot/Navbar';
import Footer from './Components/ChatBot/Footer';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<><Navbar/><HomePage/><Footer/></>}/>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/contactus" element={<><Navbar/><Contact/><Footer/></>} />
    </Routes>
  );
}

export default App;
