import React, { useState } from "react";

const links = [
  ["#system", "Система"],
  ["#cases", "Кейси"],
  ["#stack", "Стек"],
  ["#request", "Запит"]
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`shell-nav ${isOpen ? "open" : ""}`}>
      <a className="logo" href="#top" aria-label="Promin Target OS">
        <span />
        Example.
      </a>
      <nav className="nav-links" aria-label="Навігація">
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setIsOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href="#request">
        Get strategy
      </a>
      <button
        className="nav-button"
        type="button"
        aria-label="Меню"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}
