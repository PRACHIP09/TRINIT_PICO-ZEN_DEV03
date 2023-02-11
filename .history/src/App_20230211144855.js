import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import HomePage from './Pages/HomePage';
import Signup from './Pages/Signup';
import Contact from './Pages/Contact';
import Navbar from './Components/ChatBot/Navbar';
import Footer from './Components/ChatBot/Footer';
import NavbarF from './Components/Farmernavbar/NavbarF';
import StickyFooter from './Components/Farmernavbar/StickyFooter'
import Plants from './Pages/Farmers/Plants';
import Schemes from './Pages/Farmers/Schemes';
import Rawmaterial from './Pages/Farmers/Rawmaterial';
import NavbarE from './Components/Enthusiastsnavbar/NavbarE';
import HomepageF from './Pages/Farmers/HomepageF';
import Prediction from './Pages/Farmers/Prediction';
import HomepageE from './Pages/Enthusiasts/HomepageE';
import PlantsProduct from './Pages/Enthusiasts/PlantsProducts';
import CartsE from './Pages/Enthusiasts/CartsE';
import Plantinfo from './Pages/Enthusiasts/Plantinfo';
import HomepageG from './Pages/Government/HomepageG.jsx';
import NavbarG from './Components/Government.jsx/NavbarG';
import SchemesG from './Pages/Government/SchemesG';
import Display from './Pages/Government/Display';
import Doubts from './Pages/Government/Doubts';
import QuestionAns from './Pages/Farmers/QuestionAns';
import Card from './Components/Enthusiastsnavbar/Card';
import Donation from './Components/Enthusiastsnavbar/Donation';
import Search from './Pages/Search';
import Blog from './Pages/Blog';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<><Navbar/><HomePage/><Footer/></>}/>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/contactus" element={<><Navbar/><Contact/><Footer/></>} />
      <Route path="/home-farmer" element={<><NavbarF/><HomepageF/><StickyFooter/></>}/>
      <Route path="/products-to-sell" element={<><NavbarF/><Plants/><StickyFooter/></>}/>
      <Route path="/schemes" element={<><NavbarF/><Schemes/><StickyFooter/></>} />
      <Route path="/prediction" element={<><NavbarF/><Prediction/><StickyFooter/></>} />
      <Route path="/questions" element={<><NavbarF/><QuestionAns/><StickyFooter/></>} />
      <Route path="/rawmaterials" element={<><NavbarF/><Rawmaterial/><StickyFooter/></>} />
      <Route path="/home-enthusiast" element={<><NavbarE/><HomepageE/><StickyFooter/></>}/>
      <Route path="/products" element={<><NavbarE/><PlantsProduct/><StickyFooter/></>}/>
      <Route path="/schemes" element={<><NavbarE/><Schemes/><StickyFooter/></>} />
      <Route path="/cart-enthusiast" element={<><NavbarE/><CartsE/><StickyFooter/></>} />
      <Route path="/plants-information" element={<><NavbarE/><Plantinfo/><StickyFooter/></>} />
      <Route path="/home-govn" element={<><NavbarG/><HomepageG/><StickyFooter/></>}/>
      <Route path="/schemes-govn" element={<><NavbarG/><Display/><StickyFooter/></>}/>
      <Route path="/add-schemes" element={<><NavbarG/><SchemesG/><StickyFooter/></>} />
      <Route path="/doubts" element={<><NavbarG/><Doubts/><StickyFooter/></>} />
      <Route path="/donate" element={<><NavbarE/><Donation/><StickyFooter/></>} />
      <Route path="/search" element={<><Navbar/><Search/><StickyFooter/></>} />
      <Route path="/blog" element={<><Navbar/><Blog/><StickyFooter/></>} />
    </Routes>
  );
}

export default App;
