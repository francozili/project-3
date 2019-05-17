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
          <h2>Francis Teaching Hospital</h2>
          <Route path="/" exact component={DoctorsList} />
          <Route path="/edit/:id" exact component={EditDoctors} />
          <Route path="/create" exact component={CreateDoctors} />
        </div>
      </Router>
    );
  }
}
export default App;
