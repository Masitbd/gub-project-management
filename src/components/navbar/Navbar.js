import React from "react";
import logo from "../../Image/Logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="./home.html">
        <img className={styles.icon} src={logo} alt="logo" />
      </a>
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
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active ml-5 font-weight-bold">
            <a className="nav-link" href="./home.html">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle font-weight-bold"
              href="/teacher"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Teachers
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="./cse.html">
                CSE
              </a>
              <a className="dropdown-item" href="./eee.html">
                EEE
              </a>
              <a className="dropdown-item" href="./bba.html">
                BBA
              </a>
              <a className="dropdown-item" href="./addTeacher.html">
                Add Teacher
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle font-weight-bold"
              href="/material"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Materials
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="./apply.html">
                Apply Online
              </a>
              <a className="dropdown-item" href="./apllicationList.html">
                Research List
              </a>
            </div>
          </li>
          <li className="nav-item active ml-3 font-weight-bold">
            <a className="nav-link" href="./about.html">
              About Us
            </a>
          </li>
          <li className="nav-item active ml-3 font-weight-bold">
            <a className="nav-link" href="./contact.html">
              Contact Us
            </a>
          </li>
          <li className="nav-item active ml-3 font-weight-bold">
            <a
              style={{ color: "green", fontSize: "larger" }}
              className="nav-link"
              href="/project"
            >
              GUB project and thesise management system.
            </a>
          </li>
        </ul>

        <button
          className="btn btn-danger my-2 my-sm-0"
          style={{ marginLeft: "5px" }}
          onclick="logout()"
        >
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
