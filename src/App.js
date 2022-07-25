import './App.css';
import CoursePage from './Homepage/CoursePage';
import Home from './Homepage/Home';
import Users from './Homepage/Users';
import {BrowserRouter,Route,Routes} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path ="/coursepage" element={<CoursePage/>}/>
        <Route path ="/coursepage/:course_id" element ={<Users/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
