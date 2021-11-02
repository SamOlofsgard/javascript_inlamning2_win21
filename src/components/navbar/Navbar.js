import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <NavLink className="navbar-brand" to="/" exact>Kundregister App</NavLink>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav">
                <NavLink className="nav-link active" aria-current="page" to="/" exact >Kundlista</NavLink>
                <NavLink className="nav-link active" to="/Registrera" exact >Registrera ny kund</NavLink>
              </div>
            </div>
          </div>
        </nav>
    )
}

export default Navbar
