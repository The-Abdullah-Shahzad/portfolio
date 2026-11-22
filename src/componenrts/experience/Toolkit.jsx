import React from 'react';
import { FiDatabase, FiLayers, FiMonitor, FiServer, FiTool } from 'react-icons/fi';

const toolkit = [
  { title: 'Frontend', Icon: FiMonitor, tools: ['React', 'TypeScript', 'JavaScript', 'Redux', 'RTK Query', 'Redux-Saga', 'Next.js'] },
  { title: 'UI & forms', Icon: FiLayers, tools: ['MUI', 'Ant Design', 'Tailwind CSS', 'Styled Components', 'Formik', 'Yup'] },
  { title: 'Backend', Icon: FiServer, tools: ['NestJS', 'Node.js', 'REST', 'GraphQL', 'WebSockets', 'NestJS Queues', 'SendGrid'] },
  { title: 'Databases', Icon: FiDatabase, tools: ['PostgreSQL', 'MySQL', 'MongoDB', 'Schema design', 'Indexing', 'Query optimization'] },
  { title: 'Tools & practices', Icon: FiTool, tools: ['Git', 'GitHub', 'Jira', 'Figma', 'Postman', 'Code review', 'Scrum'] },
];

export default function Toolkit() {
  return (
    <section id="stack" className="section container" aria-labelledby="stack-title" tabIndex={-1}>
      <div className="section-heading"><h2 id="stack-title">Technical toolkit<span>.</span></h2></div>
      <div className="toolkit">
        {toolkit.map(({ title, Icon, tools }) => (
          <article className="toolkit-group" key={title}>
            <h3><Icon aria-hidden="true" />{title}</h3>
            <ul className="tags">{tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}
