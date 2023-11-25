import React from 'react';
import AppNavbar from './components/common/Navbar';
import Slider from './components/home/Slider';
import WhoWeAre from './components/home/WhoWeAre';
import WhyExcellence from './components/home/WhyExcellence';
import CoursesCategories from './components/home/CoursesCategories';
import TeachersSection from './components/home/TeachersSection';
import AppFooter from './components/common/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <AppNavbar />
      <Slider />
      <WhoWeAre />
      <WhyExcellence />
      <CoursesCategories />
      <TeachersSection/>
      <AppFooter />
    </div>
  );
}

export default App;
