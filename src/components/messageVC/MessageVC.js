import React from "react";
import vc from "../../Image/vc.jpg";

const MessageVC = () => {
  return (
    <div class="vc-msg" style={{ borderBottom: "8px solid rgb(129, 6, 6)" }}>
      <div class="container">
        <div class="row mt-5">
          <div class="col-md-6">
            <img style={{ width: "350px" }} src={vc} alt="vc message" />
          </div>
          <div class="col-md-6">
            <h4>MESSAGE FROM VC</h4>
            <br />
            <p>
              It is my great pleasure to introduce our university to you through
              this website-the virtual gateway to Green University of Bangladesh
              (GUB). I along with all members of the university heartily welcome
              the visitors. I hope that this website will give you total
              information about what makes our university special, in terms of
              our academic expertise, course curriculum academic programs,
              co-curriculum activities, modern labs and library facilities,
              financial and necessary logistic supports.
              <br />
              The rapid changes both in global and national level are making a
              profound impact on the role of universities. These changes will
              have a major effect on the way people work and the kinds of jobs
              they do. In a world where change is the norm, knowledge will be a
              key resource and will be highly sought after within Bangladesh and
              around the globe. Green University of Bangladesh is committed to
              prepare the competent human resource through imparting quality
              education and train to work in fields where they will be valued
              both for their specialized knowledge, and for their ability to
              research, communicate and solve problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageVC;
