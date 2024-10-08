import React from "react";
import laptop from "../../images/laptop.png";
import codewars from "../../images/codewars.png";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-block">
        <img
          src={laptop}
          alt=""
          className="animate__animated animate__fadeInLeft"
        />
        <div className="animate__animated animate__fadeInDown">
          <h2 className="about-title">About me</h2>
          <p className="about-text">
            Nurmurodov Jasurbek, a 20-year-old student at TUIT, is a budding web
            developer with a fervent passion for crafting elegant and functional
            digital solutions. Proficient in HTML, CSS, JavaScript, React.js,
            and more, they possess a keen eye for detail and a commitment to
            staying abreast of industry trends. Completed education at Najot
            Ta'lim in frontend development, they ensure that every project they
            undertake is not only visually stunning but also optimized for peak
            performance.
          </p>
          <img src={codewars} alt="" width={700} />
        </div>
      </div>
    </section>
  );
};

export default About;
