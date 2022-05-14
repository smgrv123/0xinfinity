import './App.css';
import About from './components/About';
import Goal from './components/Goal';
import Timeline from './components/Timeline';
import Timeline2 from './components/Timeline2';
import FAQ from './components/FAQ';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';
import CarouselSec from './components/CarouselSec';
function App() {
  return (
   
    <main>
       <Navbar/>
       <Header/>
       <CarouselSec/>
      <About/>
      <Goal/>
      <Timeline/>
      <Timeline2/>
      <FAQ/>
      <ComingSoon/>
      <Footer/>
    </main>
  );
}
export default App;