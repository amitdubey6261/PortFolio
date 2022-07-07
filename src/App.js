import './App.css';
import {Routes,Route} from "react-router-dom"
import HomePage from './components/homePage/HomePage';
import About from './components/about/About';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer"
import HireMe from './components/hireMe/HireMe';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/portfolio" element={<Portfolio/>}/>
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/Hire-Me" element={<HireMe/>}/>
        <Route exact path="/Services" element={<Services/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
