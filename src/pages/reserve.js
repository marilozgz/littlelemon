import Nav from '../components/TopMenu';
import Footer from '../components/Footer';
import ReserveForm from '../components/ReserveForm';
import HeroReserve from '../components/HeroReserve';
function Reserve() {
  return (
    <div className="App">
    <>
    <Nav/>
    <HeroReserve/>
    <ReserveForm/>
    <Footer/>
    </>
  
    </div>
  );
}

export default Reserve;
