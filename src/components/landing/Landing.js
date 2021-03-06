// import logo from './logo.svg';
import '../../App.scss';
// import Navbar from './header/Navbar.js';
import Banner from './main-banner/Banner.js';
import About from './aboutus/About.js';
import Features from './features/Features.js';
import Roadmap from './roadmap/Roadmap.js';
import Faqs from './faqs/Faqs.js';
import Footer from './footer/Footer.js';
import Community from './community/Community.js';


function Landing() {
  return (
    <>
       {/* <Navbar/> */}
       <Banner/>
       <About/>
       <Features/>
       <Roadmap/>
       <Faqs/>
       <Community/>
       <Footer/>
    </>
  );
}

export default Landing;