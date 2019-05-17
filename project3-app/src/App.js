import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateDoctors from "./components/create-Doctors"
import EditDoctors from "./components/edit-Doctors"
import DoctorsList from "./components/Doctors-list"
import navlogo from "./components/images/logo.png"
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">

        <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
        <a className="navbar-brand" href="/" >
        <img src={navlogo} width="40" height="40" alt="Logo missing"/>
        </a>
        <Link to="/" className="navbar-brand">Francis Teaching Hospital</Link>
        <div className="nav-collapse">
        <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
        <Link to="/" className="nav-link">Doctors</Link>
        </li>
        <li className="navbar-item">
        <Link to="/create" className="nav-link">Add Doctors</Link>
        </li>

        </ul>
        </div>
        </nav>
          <Route path="/" exact component={DoctorsList} />
          <Route path="/edit/:id" exact component={EditDoctors} />
          <Route path="/create" exact component={CreateDoctors} />
        </div>
      </Router>
    );
  }
}
export default App;
