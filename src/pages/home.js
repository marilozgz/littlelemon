import Hero from '../components/Hero';
import Nav from '../components/TopMenu';
import HorizontalList from '../components/HorizontalList';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
function Home() {
  return (
    <div className="App">
    <>
    <Nav/>
    <Hero/>
    <HorizontalList/>
    <Testimonials/>
    <Footer/>
    </>
  
    </div>
  );
}

export default Home;
