import '../App.css';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Digital from '../Courses/Digital';
import Products from '../Courses/Products';
function CoursePage() {
  return (
    <div className="App">
      <Navbar />
      <Digital/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default CoursePage;



