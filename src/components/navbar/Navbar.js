import { Box } from "@mui/system";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../Image/Logo.png";
import styles from "./Navbar.module.css";

const logout = () => {
  signOut(auth);
};

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        <img className={styles.icon} src={logo} alt="logo" />
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
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active ml-5 font-weight-bold">
            <Link to="/home" className="nav-link">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              to="/teacher"
              className="nav-link dropdown-toggle font-weight-bold text-dark"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Teachers<span className="sr-only">(current)</span>
            </Link>

            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/cse" className="dropdown-item">
                CSE
              </Link>
              <Link to="/eee" className="dropdown-item">
                EEE
              </Link>
              <Link to="/bba" className="dropdown-item">
                BBA
              </Link>
              <Link to="/addTeacher" className="dropdown-item">
                Add Teacher
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link
              to="/material"
              className="nav-link dropdown-toggle font-weight-bold text-dark"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Materials<span className="sr-only">(current)</span>
            </Link>

            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="./applyOnline" className="dropdown-item">
                Apply Online
              </Link>
              <Link to="/researchList" className="dropdown-item">
                Research List
              </Link>
            </div>
          </li>
          <li className="nav-item active ml-3 font-weight-bold">
            <Link to="/aboutUs" className="nav-link">
              About Us
            </Link>
          </li>
          <li className="nav-item active ml-3 font-weight-bold">
            <Link to="/contactUs" className="nav-link">
              Contact Us
            </Link>
          </li>
          <li className="nav-item active ml-3 font-weight-bold">
            <a
              style={{ color: "green", fontSize: "larger" }}
              className="nav-link"
              href="/teacherPortal"
            >
              Teacher Portal
            {/*   GUB project management system. */}
            </a>
          </li>
          <li className="nav-item active ml-3 font-weight-bold">
            <a
              style={{ color: "green", fontSize: "larger" }}
              className="nav-link"
              href="/studentPortal"
            >
              Student Portal
            
            </a>
          </li>
        </ul>
         {
          user && 
          <Link style={{margin:'15px', color: 'blue' }} to="/dashboard" className="nav-link">
          Dashboard 
        </Link>
         }

        <button
          style={{ margin:'0px', padding:'5px', fontSize:'12px', backgroundColor:'red', color:'white'}}
          onClick={()=>logout()}
        >
          {!user ? (
            <Link to="/login" className="nav-link">
              Log In
            </Link>
          ) : (
           
             
            <Link to="#" onClick={logout} className="nav-link">
              Log out
            </Link>
            
          )}
        </button>
        
      </div>
    </nav>
  );
};

export default Navbar;
