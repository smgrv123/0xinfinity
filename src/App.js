import './App.css';
import About from './components/About/About';
import Goal from './components/Goal/Goal';
import Timeline from './components/Timeline1/Timeline';
import Timeline2 from './components/Timeline2/Timeline2';
import FAQ from './components/FAQ/FAQ';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ComingSoon from './components/Coming Soon/ComingSoon';
import CarouselSec from './components/Carousel/CarouselSec';
function App() {
  return (

    <main>
      <Navbar />
      <Header />
      <CarouselSec />
      <About />
      <Goal />
      <Timeline />
      <Timeline2 />
      <FAQ />
      <ComingSoon />
      <Footer />
    </main>
  );
}
export default App;