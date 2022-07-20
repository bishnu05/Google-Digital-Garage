import './App.css';
import Company from './Components/Company';
import Faqs from './Components/Faqs';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import SearchSection from './Components/SearchSection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SearchSection/>
      <Company/>
      <Faqs/>
      <Footer/>
    </div>
  );
}

export default App;
