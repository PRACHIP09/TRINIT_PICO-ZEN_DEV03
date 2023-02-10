import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import HomePage from './Pages/HomePage';
import Signup from './Pages/Signup';
import Contact from './Pages/Contact';
import Navbar from './Components/ChatBot/Navbar';
import Footer from './Components/ChatBot/Footer';
import NavbarF from './Components/Farmernavbar/NavbarF';
import Plants from './Pages/Farmers/Plants';
import Schemes from './Pages/Farmers/Schemes';
import Carts from './Pages/Farmers/Carts';
import Rawmaterial from './Pages/Farmers/Rawmaterial';
import NavbarE from './Components/Enthusiastsnavbar/NavbarE';
import HomepageF from './Pages/Farmers/HomepageF';
import HomepageE from './Pages/Enthusiasts/HomepageE';
import PlantsProduct from './Pages/Enthusiasts/PlantsProducts';
import CartsE from './Pages/Enthusiasts/CartsE';
import Plantinfo from './Pages/Enthusiasts/Plantinfo';
import HomepageG from './Pages/Government/HomepageG.jsx';
import NavbarG from './Components/Government.jsx/NavbarG';
import SchemesG from './Pages/Government/SchemesG';
import Display from './Pages/Government/Display';
import Doubts from './Pages/Government/Doubts';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<><Navbar/><HomePage/><Footer/></>}/>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/contactus" element={<><Navbar/><Contact/><Footer/></>} />
      <Route path="/home-farmer" element={<><NavbarF/><HomepageF/><Footer/></>}/>
      <Route path="/products-to-sell" element={<><NavbarF/><Plants/><Footer/></>}/>
      <Route path="/schemes" element={<><NavbarF/><Schemes/><Footer/></>} />
      <Route path="/cart-farmer" element={<><NavbarF/><Carts/><Footer/></>} />
      <Route path="/rawmaterials" element={<><NavbarF/><Rawmaterial/><Footer/></>} />
      <Route path="/home-enthusiast" element={<><NavbarE/><HomepageE/><Footer/></>}/>
      <Route path="/products" element={<><NavbarE/><PlantsProduct/><Footer/></>}/>
      <Route path="/schemes" element={<><NavbarE/><Schemes/><Footer/></>} />
      <Route path="/cart-enthusiast" element={<><NavbarE/><CartsE/><Footer/></>} />
      <Route path="/plants-information" element={<><NavbarE/><Plantinfo/><Footer/></>} />
      <Route path="/home-govn" element={<><NavbarG/><HomepageG/><Footer/></>}/>
      <Route path="/schemes-govn" element={<><NavbarG/><Display/><Footer/></>}/>
      <Route path="/add-schemes" element={<><NavbarG/><SchemesG/><Footer/></>} />
      <Route path="/doubts" element={<><NavbarG/><Doubts/><Footer/></>} />
      

    </Routes>
  );
}

export default App;
