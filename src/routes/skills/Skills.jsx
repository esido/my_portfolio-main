import React from "react";
import cssIcon from "../../images/cssIcon.svg";
import jsIcon from "../../images/jsIcon.svg";
import figmaIcon from "../../images/figmaIcon.svg";
import sassIcon from "../../images/sassIcon.svg";
import reactIcon from "../../images/reactIcon.svg";
import tailwindIcon from "../../images/tailwindIcon.svg";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="skills-title animate__animated animate__fadeInDown">
        My Skills
      </h2>
      <div className="skills-wrapper">
        <div className="skills-block">
          <div className="skills-block__item animate__animated animate__fadeInDown">
            <img src={cssIcon} alt="" />
            <span>Css</span>
          </div>
          <div className="skills-block__item animate__animated animate__fadeInDown">
            <img src={jsIcon} alt="" />
            <span>Javascript</span>
          </div>
          <div className="skills-block__item animate__animated animate__fadeInDown">
            <img src={reactIcon} alt="" />
            <span>React</span>
          </div>
        </div>
        <div className="skills-block">
          <div className="skills-block__item animate__animated animate__fadeInDown">
            <img src={figmaIcon} alt="" />
            <span>Figma</span>
          </div>
          <div className="skills-block__item animate__animated animate__fadeInDown">
            <img src={tailwindIcon} alt="" />
            <span>Tailwind</span>
          </div>
          <div className="skills-block__item animate__animated animate__fadeInDown">
            <img src={sassIcon} alt="" />
            <span>SCSS/SASS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
