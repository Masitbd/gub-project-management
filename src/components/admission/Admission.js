import React from "react";

const Admission = () => {
  return (
    <div class="admission">
      <div class="container">
        <div class="row p-4">
          <div
            class="col-md-5 "
            style={{
              backgroundColor: "#FE2F51",
              padding: "30px",
              color: "white",
            }}
          >
            <div class="admission">
              <h3>APPLY NOW</h3>
              <p>
                Green University of Bangladesh (GUB), one of the leading private
                universities in Bangladesh, was founded on 09 January in 2003
                under the Private University Act 1992 and its amendment in 1998{" "}
                <a href="./apply.html">Apply here</a>
              </p>
            </div>
          </div>
          <div class="col-md-1"></div>
          <div
            class="col-md-5 academic"
            style={{
              backgroundColor: "#DC3A7F",
              padding: "30px",
              color: "white",
            }}
          >
            <h3>ACADEMIC SUPPORT</h3>
            <p>
              Green University of Bangladesh (GUB), one of the leading private
              universities in Bangladesh, was founded on 09 January in 2003
              under the Private University Act 1992 and its amendment in 1998
              <a href="./contact.html">Related materials</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
