import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
    const [show,setShow]=useState(false)
    return (
        <>
        <section className="navbar-bg container-fluid">

        <nav class="navbar navbar-expand-lg navbar-light navbar-bg">
  <div class="container navbar-bg">
    <a class="navbar-brand text-danger fs-5 fw-bold fst-italic" href="#">Bpay💱</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setShow(!show)}>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class={`collapse navbar-collapse ${show ? "show": ""}`}>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ms-auto mr-0">
        <li class="nav-item px-5 nlink">
          <NavLink class="nav-link active menucolor" aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item px-5 nlink">
          <NavLink class="nav-link active menucolor" aria-current="page" to="/service">Services</NavLink>
        </li>
        <li class="nav-item px-5 nlink">
          <NavLink class="nav-link active menucolor" aria-current="page" to="/about">About</NavLink>
        </li>
        <li class="nav-item px-5 nlink">
          <NavLink class="nav-link active menucolor" aria-current="page" to="/contact">Contact</NavLink>
        </li>
      </ul>
      <form class="d-flex">
        
        <button class="btn btn-outline-success mx-5" type="submit">Login</button>
        <button class="btn btn-outline-primary" type="submit">Signup</button>
      </form>
    </div>
  </div>
</nav>
            
        </section>
        </>
    )
}

export default Navbar
