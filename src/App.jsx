import { useState, useEffect } from "react";
import { Navigation } from "./components/NavBar";
import { Header } from "./components/HeaderSection";
import { About } from "./components/AboutSection";
import { Services } from "./components/ServicesSection";
import { Gallery } from "./components/GallerySection";
import { Contact } from "./components/ContactUsSection";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import {Footer} from "./components/FooterSection";
import {Route, Routes} from "react-router-dom";
import {Policy} from './components/PolicySection';
import {TrafficNet} from './components/TrafficNetSection';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />

      <main id="main">
        <Routes>
          <Route path="/" element={<Header data={landingPageData.Header} />} />
          <Route path="/services" element={<Services data={landingPageData.Services} />} />
          <Route path="/traffic-net" element={<TrafficNet data={landingPageData.Header} />} />
          <Route path="/fleet" element={<Gallery data={landingPageData.Gallery} />} />
          <Route path="/contacts" element={<Contact data={landingPageData.Contact} />} />
          <Route path="/about" element={<About data={landingPageData.About} />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
      </main>

      {/*<SocialNetworks />*/}
      <Footer />
    </div>
  )
};

export default App;
