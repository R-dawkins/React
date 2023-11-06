import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
  return(
    <nav className="navbar">
      <Link to='/' className="menu">Home</Link>
      <Link to='/video' className="menu">Video</Link>
    </nav>
  );
}