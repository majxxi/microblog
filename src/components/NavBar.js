import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Jumbotron } from "reactstrap";

function NavBar() {

  return (
    <div>
      <Jumbotron>
        <h1 className="display-3" style={{fontStyle: "italic"}}>gram</h1>
        <h3 className="lead">Share only a gram of you.</h3>
        <Link exact="true" to='/' className="nav-item mr-4">Home</Link>
        <Link exact="true" to='/new' className="nav-item">New Post</Link>
      </Jumbotron>
      <hr className="my-2" />
    </div>
  )
}

export default NavBar;
