import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar fixed-top navbar-dark zeroOpacity">
        <a class="navbar-brand" href="#">
          N
        </a>
        <div className="">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 d-flex flex-row">
            <li className="nav-item px-2">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item px-2">
              <a class="nav-link" href="#">
                Experiance
              </a>
            </li>
            <li className="nav-item px-2">
              <a class="nav-link" href="#">
                Work
              </a>
            </li>
            <li className="nav-item px-2">
              <a class="nav-link" href="#">
                Connect
              </a>
            </li>
            <li className="nav-item px-2">
              <a class="nav-link" href="#">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
