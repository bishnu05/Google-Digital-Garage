import '../App.css';
import Card from '../Components/Card';
import Company from '../Components/Company';
import Faqs from '../Components/Faqs';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import SearchSection from '../Components/SearchSection';
import Webinar from '../Components/Webinar';

function Home() {
  return (
    <div className="App">
      <Navbar />
      <SearchSection/>
      <Company/>
      <Webinar/>
      <Card/>
      <Faqs/>
      <Footer/>
    </div>
  );
}

export default Home;


