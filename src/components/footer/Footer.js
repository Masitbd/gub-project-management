import React from "react";
import v1 from "../../Image/v1.jpg";
import v2 from "../../Image/v2.jpg";
import v3 from "../../Image/v3.jpg";
import v4 from "../../Image/v4.jpg";
import v5 from "../../Image/v5.jpg";
import v6 from "../../Image/v6.jpg";
import v7 from "../../Image/v7.jpg";
import v8 from "../../Image/v8.jpg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container my-4">
        <div className="row text-white">
          <div className="col-md-6 mt-5">
            <h6>ACADEMIC COLLABORATION & INSTITUTIONAL MEMBERSHIPS</h6>
            <br />
            <div className="row">
              <div className="col-md-6">
                <img src={v1} alt="" />
                <br />
                <img src={v2} alt="" />
                <br />
                <img src={v3} alt="" />
                <br />
                <img src={v4} alt="" />
              </div>
              <div className="col-md-6">
                <img src={v5} alt="" />
                <br />
                <img src={v6} alt="" />
                <br />
                <img src={v7} alt="" />
                <br />
                <img src={v8} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="row">
              <div className="col-md-6">
                <h6>QUICK CONTACT</h6>
                <br />
                <p style={{ color: "gray" }}>
                  Main Campus: <br />
                  220/D, Begum Rokeya Sarani (300 meter North Side of IDB
                  Bhaban), Dhaka -1207, Bangladesh
                  <br />
                  Phone:9014725, 8031031, 8060116 Cell:01757074304, 01757074302,
                  01757074303, 01757074301
                  <br />
                  Permanent campus: Purbachal American city(kanchon, Rupganj).
                  Cell:01713289217, 01764193396 Email:{" "}
                  <span style={{ color: "greenyellow" }}>
                    admission@green.edu.bd
                  </span>
                </p>
              </div>
              <div className="col-md-6">
                <h6>CONNECT WITH US</h6>
                <br />
                <a href="/">Facebook</a>
                <br />
                <a href="/">Twitter</a>
                <br />
                <a href="/">Youtube</a>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
