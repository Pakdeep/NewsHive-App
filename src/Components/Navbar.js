import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">s
            <Link className="navbar-brand" to="/">
              News-Hive
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="/navbarSupportedContent"
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
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </a>
                  <ul
                    className="dropdown-menu bg-dark"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item business " to="/business">
                        Business
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item sports " to="/sports">
                        Sports
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item politics " to="/politics">
                        Politics
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item health " to="/health">
                        Health
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item entertainment "
                        to="/entertainment"
                      >
                        Entertainment
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item science " to="/science">
                        Science
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item technology "
                        to="/technology"
                      >
                        Technology
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
