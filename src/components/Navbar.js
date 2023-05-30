import React from "react";
import PropTypes from "prop-types";
import {Link, useLocation } from 'react-router-dom'

export default function Navbar(props) {
  const location = useLocation();
  return (
    <div>
      <>
        <nav
          className={`navbar navbar-expand-lg bg-body-tertiary bg-${props.mode}`}
          data-bs-theme={props.mode}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              {props.title}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname=== "/" ? 'active' : ""} `} aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname=== "/about" ? 'active' : ""} `} to="about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="modeSwitch">
                <p>Dark mode</p>
                <div className="form-check form-switch mx-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onClick={props.toggleMode}
                    role="switch"
                    id="flexSwitchCheckChecked"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckChecked"
                  >
                    Light mode
                  </label>
                </div>
              </div>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </>
    </div>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired };

Navbar.defaultProps = { title: "Title" };
