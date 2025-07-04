import React from 'react'
import './Portfolio.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include payment processing, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://ecommerce-demo.com"
    },
    {
      id: 2,
      title: "Real-Time Chat App",
      description: "React Native mobile app with real-time messaging capabilities. Includes WebSocket integration, push notifications, and file sharing.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["React Native", "WebSocket", "Firebase", "Node.js"],
      github: "https://github.com/yourusername/chat-app",
      live: "https://chat-app-demo.com"
    },
    {
      id: 3,
      title: "Task Management System",
      description: "Next.js application with TypeScript and Tailwind CSS. Features drag-and-drop interface, team collaboration, and calendar integration.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
      github: "https://github.com/yourusername/task-manager",
      live: "https://task-manager-demo.com"
    }
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {projects.map((project) => (
          <article key={project.id} className="portfolio_item">
            <div className="portfolio_item_image">
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="portfolio_item_technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="technology_tag">{tech}</span>
              ))}
            </div>
            <div className="portfolio_item_cta">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">
                <FaGithub /> GitHub
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;