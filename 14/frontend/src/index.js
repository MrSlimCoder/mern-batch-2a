import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import Login from './Login';
import Signup from "./Signup";
import LoggedIn from "./LoggedIn";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/signup' element={<Signup />} />
      <Route exact path='/loggedIn' element={<LoggedIn />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
