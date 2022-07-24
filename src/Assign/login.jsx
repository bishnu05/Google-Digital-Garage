import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
 
  const isAuth=useContext(AuthContext)

  const navigate=useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        
        alert("SUCCESS");
        isAuth.handleLogin(data.token)
        navigate("/login")
      })
      .catch((err) => {
        console.log(err);
        alert("Error");
      });
  };