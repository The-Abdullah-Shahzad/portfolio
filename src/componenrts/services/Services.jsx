import React from 'react'
import "./Services.css";
import {BsCheck} from 'react-icons/bs';

const Services = () => {
  return (
    <section id = "services"> 
    <h5>Featured</h5>
    <h2>My Projects</h2>
    <div className='container service_container'>
      <article className='service'>
        <div className="service_head">
          <h3>E-Commerce Platform</h3>
        </div>
        <ul className='service_list'>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Full-stack e-commerce solution with React, Node.js, and PostgreSQL</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Integrated payment processing with Stripe API</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Real-time inventory management and order tracking</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Admin dashboard with analytics and reporting</p>
          </li>
        </ul>
      </article>

      <article className='service'>
        <div className="service_head">
          <h3>Real-Time Chat App</h3>
        </div>
        <ul className='service_list'>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>React Native mobile app with real-time messaging</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>WebSocket integration for instant message delivery</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Push notifications and file sharing capabilities</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>End-to-end encryption for secure communications</p>
          </li>
        </ul>
      </article>

      <article className='service'>
        <div className="service_head">
          <h3>Task Management System</h3>
        </div>
        <ul className='service_list'>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Next.js application with TypeScript and Tailwind CSS</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Drag-and-drop interface for task organization</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Team collaboration features with real-time updates</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Calendar integration and deadline tracking</p>
          </li>
        </ul>
      </article>

    </div>
    </section>
  )
}

export default Services