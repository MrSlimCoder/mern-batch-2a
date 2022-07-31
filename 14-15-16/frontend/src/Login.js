import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function Login() {

    const response = await axios.post("http://localhost:4000/user/login", { email, password });
    if (response?.status === 200) {
      localStorage.setItem("token",response.data.data[1].token);
      navigate("/loggedIn", { replace: true });
    }
    else {
      alert("User Unable To Login");
    }
  }

  return (
    <div className="App">
      <h1>Login</h1>
      <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <br />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <br />
      <button onClick={() => Login()}>Login</button>
    </div>
  );
}

export default Login;
