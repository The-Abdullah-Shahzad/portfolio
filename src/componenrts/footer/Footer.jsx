import React from 'react';
import { profile } from '../../profile';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <div className="footer-links">
          <a href={profile.github}>GitHub</a>
          <a href={profile.linkedin}>LinkedIn</a>
          <a href="#top">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
