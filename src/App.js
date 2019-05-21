import React from 'react';
// import './App.css';
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Create from "./components/create.component";
import Edit from "./components/edit.component";
import List from "./components/list.component";


function App() {
  return (
    <Router>
    <div className="nav-extended">
    <nav>
  <div className="nav-wrapper purple">
  <Link to="/" className="brand-logo center">MERN Crud Todo </Link>
    <ul id="nav-mobile" className="left hide-on-med-and-down">
      <li><Link to="/" className="nav-link">Todos</Link></li>
      <li><Link to="/create" className="nav-link">Create Todo</Link></li>
    </ul>
  </div>
</nav>
<div className ="container">
      <h2> Mern Crud</h2>
      <Route path="/" exact component={List} />
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create" component={Create} />
    </div>
    </div>
    </Router>
  );
}

export default App;
