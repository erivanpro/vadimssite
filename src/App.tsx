
import Header from './components/header/header';
import './App.css'
import Banner from './components/banner';
import Footer from './components/footer/footer';
import Cookies from './components/cookies/cookies';
import Section1 from './components/section1/sectionone';
import Tech from './components/tech/tech';
import Go from './components/go/go';
import FAQ from './components/faq/faq';
import Linkedin from './components/linkedin/linkedin';
import MesServices from './components/meservices/messervices';
import Statsdeux from './components/statsdeux/statsdeux';
import Section3 from './components/section3/section3';
import Section4 from './components/section4/section4';
import Section5 from './components/section5/Section5';
import Section8 from './components/section8/Section8';
import Section9 from './components/section9/Section9';
function App() {
  
  return (
<div className='h-full bg-black w-full'>
  <Linkedin/>
<Header/>
<Banner/>
<Tech/>
<Section1/>
<Section9/>
<Section4/>
<Section8/>
<Section3/>
<Section5/>
<Go/>
<FAQ/>
<Statsdeux/>
<Cookies/>
<MesServices/>




<Footer/>
</div> 

  );
}

export default App;