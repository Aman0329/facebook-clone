import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Link(){
    return(
        <>
    <div className='top'>
        <div className='logo'> </div>
        <div className='search'><nav className="navbar navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand" style={{fontWeight:"bold",color:"blue"}}>Social-Media-App </a>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav></div>
    </div>
        </>
    )}
    export default Link;