import React from "react";
import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = () => {
  return (
    <div
      className={styles.aboutGreen}
      style={{ borderBottom: "8px solid rgb(219, 3, 3)" }}
    >
      <div className="container">
        <p className={styles.welcome}>
          <span style={{ fontWeight: "bolder", paddingRight: "10px" }}>
            WELCOME
          </span>
          TO GREEN UNIVERSITY OF BANGLADESH (GUB)
        </p>
        <br />
        <p>
          Green University of Bangladesh (GUB), one of the leading private
          universities in Bangladesh, was founded in 2003 under the Private
          University Act 1992 with a vision to create a global higher education
          center of excellence. GUB offers students from all walks of life the
          advantages of an affordable, personalized education of global
          standard. As a modern, dynamic, and innovative institution for
          undergraduate and graduate students, GUB lays stress on quality
          education imparted by a galaxy of highly qualified, dynamic,
          dedicated, and well-experienced faculty members with global exposure.
        </p>
        <br />
        <p>
          GUB’s greatest resource in fulfilling its mission is its faculty of
          about 300 distinguished scholars and educators, whose scholarly
          research experiences and teaching skills enrich the students’
          classNameroom environment. To ensure quality education, GUB is
          equipped with modern infrastructural facilities, latest academic
          curricula, Internet with Wi-Fi facility, air-conditioned
          classNamerooms, and seminar halls supported with multi-media, rich
          libraries, most sophisticated laboratories, students' cafeterias,
          standby generators, etc. The students of GUB experience a vibrant
          university community with a diverse range of academic offerings and
          about 6,500 participating students.
        </p>
      </div>
    </div>
  );
};

export default WelcomeMessage;
