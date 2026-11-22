import React from 'react';
import { FiDownload, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';
import portrait from '../../assets/images/portrait.webp';
import cv from '../../assets/CV/Abdullah Shahzad.pdf';
import { profile } from '../../profile';

export default function Header() {
  return (
    <section className="container hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="eyebrow hero-role">{profile.role}</p>
        <h1 id="hero-title">
          <span className="given-name">Muhammad</span>
          Abdullah<br />Shahzad<span>.</span>
        </h1>
        <p className="hero-description">
          I build production SaaS applications with React, TypeScript, NestJS, and PostgreSQL.
          My work spans survey platforms, marketing operations, and inventory management.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#portfolio">View projects</a>
          <a className="button button-secondary" href={cv} download="Muhammad-Abdullah-Shahzad-CV.pdf">
            <FiDownload aria-hidden="true" /> Download CV
          </a>
        </div>
        <div className="hero-socials">
          <a href={profile.github}><FiGithub aria-hidden="true" /> GitHub</a>
          <a href={profile.linkedin}><FiLinkedin aria-hidden="true" /> LinkedIn</a>
        </div>
      </div>
      <figure className="portrait">
        <div className="portrait-frame">
          <img src={portrait} alt={profile.name} width="811" height="1440" />
        </div>
        <figcaption><FiMapPin aria-hidden="true" />{profile.location}</figcaption>
      </figure>
    </section>
  );
}
