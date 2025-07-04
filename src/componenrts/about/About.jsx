import React from "react";
import "./About.css";
import { FaAward, FaFolderOpen } from "react-icons/fa";
import {GiGraduateCap} from "react-icons/gi"
import img from "../../assets/images/me3.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_img">
            <img src={img} alt="Me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years<br/>Full-Stack Development</small>
            </article>
            <article className="about_card">
              <GiGraduateCap className="about_icon" />
              <h5>Education</h5>
              <small>BS Computer Science<br/>COMSATS University</small>
            </article>
            <article className="about_card">
              <FaFolderOpen className="about_icon" />
              <h5>Projects</h5>
              <small>15+ Completed<br/>Web & Mobile Apps</small>
            </article>
           
          </div>
            <p>
              I'm Abdullah Shahzad, a passionate Full-Stack Software Engineer with expertise in modern web technologies. 
              I specialize in building scalable applications using React, Node.js, and cloud platforms. 
              With a strong foundation in both frontend and backend development, I create seamless user experiences 
              and robust server-side solutions.
            </p>
            <p>
              My journey in software development started during my university years, where I worked on various projects 
              ranging from e-commerce platforms to real-time messaging applications. I'm particularly interested in 
              cloud architecture, API design, and creating intuitive user interfaces that solve real-world problems.
            </p>
            <p>
              When I'm not coding, I enjoy staying updated with the latest tech trends, contributing to open-source projects, 
              and mentoring junior developers. I believe in writing clean, maintainable code and following industry best practices.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Connect
            </a>
        </div>
      </div>
    </section>
  );
};

export default About;
