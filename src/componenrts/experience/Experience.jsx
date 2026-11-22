import React from 'react';

const roles = [
  {
    company: 'Codebricks Pvt Ltd',
    start: '2025-12',
    startLabel: 'Dec 2025',
    highlights: [
      'Lead frontend architecture for client-facing SaaS products, with a focus on reusable components, state management, and API integration.',
      'Work with product stakeholders on feature requirements and help improve code quality through peer reviews and CI practices.',
    ],
  },
  {
    company: 'Giglabs Pvt Ltd',
    start: '2021-11',
    startLabel: 'Nov 2021',
    end: '2025-12',
    endLabel: 'Dec 2025',
    highlights: [
      'Built full-stack features for 7+ client projects across inventory, e-commerce, marketing operations, and service portals.',
      'Designed a queue-based CSV import pipeline with live WebSocket progress, optimized PostgreSQL queries, and integrated SendGrid campaign events.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section container experience-section" aria-labelledby="experience-title" tabIndex={-1}>
      <div className="section-heading">
        <h2 id="experience-title">Experience<span>.</span></h2>
      </div>
      <ol className="career-list">
        {roles.map(({ company, start, startLabel, end, endLabel, highlights }) => (
          <li className="career-entry" key={company}>
            <div>
              <p className="career-date">
                <time dateTime={start}>{startLabel}</time> – {end ? <time dateTime={end}>{endLabel}</time> : 'Present'}
              </p>
              <h3>{company}</h3>
              <p className="career-title">Software Engineer</p>
            </div>
            <ul className="career-highlights">{highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
