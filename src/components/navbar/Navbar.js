import React from 'react'
import {Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
             <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand ml-5" to="/">
        <img src="" width="30" height="30" alt="" />
       <span className="logo--red"> tile</span><span className="logo">debt.</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto left">
            <li className="nav-item active">
              <Link className="nav-link navlink" to="/">
                The FDR Program
              </Link>
            </li>
            <li className="nav-item  active">
              <Link className="nav-link navlink" to="/">
              Debt Resources
              </Link>
            </li>
            <li className="nav-item  active">
              <Link
                className="nav-link navlink"
                to="/"
              >
             Blog
              </Link>
            </li>
            <li className="nav-item  active">
              <Link
                className="nav-link navlink"
                to="/"
              >
             Our company
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto left">
            <li className="nav-item active">
              <Link
                className="nav-link navlink"
                to="/"
              >
             Qualify me
              </Link>
            </li>
            <li className="nav-item active mr-5 bg-color">
              <Link
                className="nav-link navlink logo navborder"
                to="/dashboard"
              >
              Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </nav>
        </div>
    )
}
