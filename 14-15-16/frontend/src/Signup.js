import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function Signup() {
    const response = await axios.post("http://localhost:4000/user/signup", { email, password });
    if (response?.status === 200) {
      navigate("/loggedIn", { replace: true });
    }
    else {
      alert("User Unable To Added");
    }
  }

  return (
    <div className="App">
      <h1>Signup</h1>
      <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <br />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <br />
      <button onClick={() => Signup()}>Signup</button>
    </div>
  );
}

export default Signup;
