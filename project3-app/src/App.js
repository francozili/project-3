import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>Francis Teaching Hospital</h2>
        </div>
        <Route path="/" exact component={DoctorsList} />
        <Route path="/edit/:id" exact component={EditDoctors} />
        <Route path="/create" exact component={CreateDoctors} />
      </Router>
    );
  }
}
export default App;cd 
