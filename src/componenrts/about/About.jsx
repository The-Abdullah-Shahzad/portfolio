import React from 'react';
import { FiBookOpen, FiGlobe } from 'react-icons/fi';
import { profile } from '../../profile';

export default function About() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-title" tabIndex={-1}>
      <div className="container about-layout">
        <div>
          <h2 id="about-title">About me<span>.</span></h2>
          <p>I’m a full-stack software engineer based in {profile.location}, with over four years of production experience building web applications for international clients.</p>
          <p>I focus on clean component architecture, efficient APIs, and database performance. I enjoy working with product stakeholders to turn complex workflows into interfaces people can use confidently.</p>
        </div>
        <dl className="about-facts">
          <div>
            <dt><FiGlobe aria-hidden="true" /> Availability</dt>
            <dd>{profile.availability}</dd>
          </div>
          <div>
            <dt><FiBookOpen aria-hidden="true" /> Education</dt>
            <dd>BS Computer Science, COMSATS University, Lahore · 2018–2022</dd>
            <dd>Specialization in Artificial Intelligence</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
