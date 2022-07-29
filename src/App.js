import React from 'react'
import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Slider from './components/Slider.js'
import data from './data/data.json'
import Offers from './components/Offers.js'
import Heading from './components/Heading.js'
import Starproduct from './components/Starproduct.js'
import Hotaccessoriesmenu from './components/Hotaccessoriesmenu.js'
import HotAccessories from "./components/HotAccessories.js"
import Productreviews from "./components/Productreviews.js"
import Videos from './components/Videos.js'
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
import NavOptions  from "./components/NavOptions.js"





function App() {
  return (
      <Router>
        <PreNavbar/>
        <Navbar/>
        <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
        <Slider start={data.banner.start}/>
        <Offers offer={data.offer}/>
        <Heading text="STAR PRODUCTS"/>
        <Starproduct starProduct={data.starProduct}/>
        <Heading text="HOT ACCESSORIES"/>
        <Hotaccessoriesmenu/>
        <Routes>

<Route path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />}/>
<Route path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />
<Route path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
<Route path="/lifeStyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />} />
<Route path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
  
</Routes>
<Heading text="PRODUCT REVIEWS" />
<Productreviews productReviews={data.productReviews}/>
<Heading text="VIDEOS" />
<Videos videos={data.videos}/>
<Heading text="IN THE PRESS" />
<Banner banner={data.banner} />
<Footer footer={data.footer}/>
      </Router>
  );
}

export default App;
