import React from "react";
import chairman from "../../Image/Chair.jpg";

const MessageChairman = () => {
  return (
    <div class="vc-msg">
      <div class="container">
        <div class="row mt-5">
          <div class="col-md-6">
            <h4>MESSAGE FROM CHAIRMAN</h4>
            <br />
            <p>
              Welcome to Our University.
              <br />
              The 21st century with the rapid expansion of globalization has
              initiated revolutionary changes in scientific achievements,
              educational diversification, and cultural enrichment almost in all
              the countries. Bangladesh is no exception in this regard. The
              society of Bangladesh has embarked on considerable transformations
              to cope with new challenges. One of the areas where tangible
              success has been achieved is the domain of human resources
              development. In general, our country is suffering from shortage of
              finance in higher educational institutions. However, we have been
              witnessing a proliferation in the growth of private universities
              during the last two decades. This has opened up enormous
              opportunities for the youth of Bangladesh from the population for
              the acquisition of creative and competitive higher education in
              diverse fields of knowledge.
              <br />
            </p>
          </div>
          <div class="col-md-6">
            <img
              style={{ width: "350px", marginLeft: "170px" }}
              src={chairman}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageChairman;
