import '../App.css';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Certificate from '../Courses/Cirtificate';
import Faq2 from '../Courses/Faq2';

function Users() {
  return (
    <div className="App">
      <Navbar />
      <Certificate/>
      <Faq2/>
      <Footer/>
    </div>
  );
}

export default Users;



