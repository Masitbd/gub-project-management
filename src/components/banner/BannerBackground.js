import React from "react";
import image1 from "../../Image/convo.jpg";
import image3 from "../../Image/convo2.jpg";
import image2 from "../../Image/convo3.jpg";
import styles from "./BannerBackground";

const BannerBackground = () => {
  return (
    <div class={styles.bellowBanner}>
      <div class="container mt-4">
        <div style={{ borderBottom: "5px solid gray", textAlign: "center" }}>
          <h4>FOURTH CONVOCATION 2021</h4>
        </div>
        <div class="row mt-4">
          <img src={image2} style={{ width: "100%", height: "350px" }} alt="" />
        </div>
        <div class="row mt-4">
          <div class="col-md-6">
            <img src={image1} alt="" style={{ width: "550px" }} />
          </div>
          <div class="col-md-6">
            <img src={image3} alt="" style={{ width: "550px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerBackground;
