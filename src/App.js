import Banner from "./Components/Banner";
import  { NavbarTwo } from "./Components/Navbar";
import Featured from "./Components/Featured"
import Rooms from "./Components/Rooms"
import WhatSection from "./Components/WhatSection";
import Location from "./Components/Location";

import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import Details from "./Components/Details";
import Event from "./Components/Event";
import BottomNavConstant from "./Components/BottomFixed";
function App() {
  return (
    <div className="App">
        <NavbarTwo />
        <div className="pt-[80px]" >
        <BottomNavConstant />
        <Banner />
        <Details />
        <Featured />
        <Rooms />
        <WhatSection />
     
        <Location />
        <Event />
        <Testimonial />
        <Footer />
        </div>
    </div>
  );
}

export default App;
