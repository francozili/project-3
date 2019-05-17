import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateDoctors from "./components/create-Doctors"
import EditDoctors from "./components/edit-Doctors"
import DoctorsList from "./components/Doctors-list"
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="" target="_blank">
        <img src={logo} width="30" height="30" alt="Logo missing"/>
        <Link to="/" className="navbar-brand">Francis Teaching Hospital</Link>
        <div className="collapse nav-collapse">
        <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
        <Link to="/" className="navbar-link">Doctors</Link>
        </li>
        <li className="navbar-item">
        <Link to="/create" className="navbar-link">Create DoctorsList</Link>
        </li>

        </ul>
        </div>
        </a>
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
