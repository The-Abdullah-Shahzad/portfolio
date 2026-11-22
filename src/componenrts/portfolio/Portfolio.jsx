import React from 'react';
import { FiBarChart2, FiClipboard, FiGithub, FiLayers, FiMonitor, FiSend, FiUsers } from 'react-icons/fi';
import { profile } from '../../profile';

const projects = [
  {
    title: 'GPI Survey Builder',
    kind: 'Multi-tenant SaaS',
    description: 'Lead frontend architecture for the admin portal, survey builder, reporting dashboard, and respondent app. Shared components and design tokens keep the experience consistent across all four.',
    stack: ['React', 'TypeScript', 'RTK Query', 'NestJS', 'PostgreSQL'],
    theme: 'survey',
    Icon: FiBarChart2,
  },
  {
    title: 'Flavorwiki Email Tool',
    kind: 'Marketing operations',
    description: 'Built a campaign platform that imports 100,000+ CSV records with live progress, processes them in a rate-limited queue, and tracks opens, clicks, and bounces via SendGrid.',
    stack: ['React', 'NestJS', 'MySQL', 'RTK Query', 'WebSockets', 'SendGrid'],
    theme: 'email',
    Icon: FiSend,
  },
  {
    title: 'Inventory Management System',
    kind: 'Inventory operations',
    description: 'Delivered stock tracking, vendor management, shipment logging, and auditing. Designed an indexed PostgreSQL schema and built search and filtering for large inventories.',
    stack: ['React', 'NestJS', 'PostgreSQL', 'Redux-Saga', 'MUI'],
    theme: 'inventory',
    Icon: FiLayers,
  },
  {
    title: 'Flavorwiki Operator App',
    kind: 'Survey operations',
    description: 'Built and optimized UI components, added form validation, and contributed to MongoDB data modeling and GraphQL query optimization.',
    stack: ['React', 'Node.js', 'GraphQL', 'MongoDB', 'Ant Design', 'Formik', 'Yup'],
    theme: 'operator',
    Icon: FiClipboard,
  },
  {
    title: 'Flavorwiki Sensory App',
    kind: 'Sensory research',
    description: 'Built the responsive frontend from Figma, created a reusable component library, and managed API requests with RTK Query.',
    stack: ['React', 'RTK Query', 'Styled Components', 'Ant Design'],
    theme: 'sensory',
    Icon: FiUsers,
  },
  {
    title: 'RFM Merchant Portal',
    kind: 'Merchant dashboard',
    description: 'Developed a mobile-first dashboard for merchants to manage rental machines.',
    stack: ['React', 'Ant Design', 'RTK Query', 'Styled Components'],
    theme: 'merchant',
    Icon: FiMonitor,
  },
];

function ProjectCard({ title, kind, description, stack, theme, Icon }) {
  return (
    <article className="project">
      <div className={'project-art art-' + theme} aria-hidden="true">
        <div className="art-window">
          <div className="art-bar"><i /><i /><i /></div>
          <div className="art-body"><Icon /><div className="art-lines"><i /><i /><i /></div></div>
        </div>
      </div>
      <div className="project-content">
        <p className="eyebrow">{kind}</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="tags" aria-label="Technologies">
          {stack.map((tech) => <li key={tech}>{tech}</li>)}
        </ul>
      </div>
    </article>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="section container" aria-labelledby="work-title" tabIndex={-1}>
      <span id="services" className="section-anchor" aria-hidden="true" />
      <div className="section-heading">
        <h2 id="work-title">Projects<span>.</span></h2>
        <a className="text-link" href={profile.github}><FiGithub aria-hidden="true" /> Browse GitHub</a>
      </div>
      <div className="project-grid">
        {projects.map((project) => <ProjectCard key={project.title} {...project} />)}
      </div>
    </section>
  );
}
