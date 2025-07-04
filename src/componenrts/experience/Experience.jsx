import React from "react";
import "./Experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Expertise</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <h4>React.js</h4>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <h4>TypeScript</h4>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <h4>Next.js</h4>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <h4>Redux Toolkit</h4>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <h4>Tailwind CSS</h4>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <h4>Material-UI</h4>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <h4>Node.js</h4>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <h4>Express.js</h4>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <h4>NestJS</h4>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <h4>PostgreSQL</h4>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <h4>MongoDB</h4>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <h4>Redis</h4>
            </article>
          </div>
        </div>

        <div className="experience_frontend">
          <h3>DevOps & Tools</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <h4>Docker</h4>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <h4>AWS</h4>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <h4>Git & GitHub</h4>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <h4>CI/CD</h4>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <h4>Jest Testing</h4>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <h4>Postman</h4>
            </article>
          </div>
        </div>

        <div className="experience_frontend">
          <h3>Mobile & Others</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <h4>React Native</h4>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <h4>Firebase</h4>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <h4>GraphQL</h4>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <h4>REST APIs</h4>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <h4>WebSocket</h4>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <h4>Agile/Scrum</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
