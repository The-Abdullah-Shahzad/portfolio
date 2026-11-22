import React, { useRef, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { profile } from '../../profile';

const links = [
  ['#portfolio', 'Projects'],
  ['#experience', 'Experience'],
  ['#about', 'About'],
  ['#stack', 'Stack'],
  ['#contact', 'Contact'],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);

  function handleEscape(event) {
    if (event.key === 'Escape' && open && menuButton.current.getClientRects().length) {
      setOpen(false);
      menuButton.current.focus();
    }
  }

  function followLink(event) {
    setOpen(false);
    if (open && menuButton.current.getClientRects().length) {
      document.getElementById(event.currentTarget.hash.slice(1))?.focus({ preventScroll: true });
    }
  }

  function closeWhenFocusLeaves(event) {
    if (open && !event.currentTarget.contains(event.relatedTarget)) setOpen(false);
  }

  return (
    <header className="site-header" onKeyDown={handleEscape} onBlur={closeWhenFocusLeaves}>
      <div className="container nav-inner">
        <a className="brand" href="#top" onClick={() => setOpen(false)} aria-label={profile.name + ', home'}>
          <span className="brand-mark" aria-hidden="true">as<span>.</span></span>
          <span className="brand-name">{profile.displayName}</span>
        </a>
        <button
          type="button"
          className="menu-toggle"
          ref={menuButton}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((wasOpen) => !wasOpen)}
        >
          {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="primary-navigation" className="nav-links" aria-label="Main navigation" data-open={open}>
          {links.map(([href, label]) => (
            <a key={href} href={href} className={href === '#contact' ? 'nav-contact' : undefined} onClick={followLink}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
