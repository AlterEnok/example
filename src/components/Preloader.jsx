import React, { useEffect, useRef } from "react";
export default function Preloader({ isLoaded, progress }) {
  return (
    <div className={`preloader ${isLoaded ? "preloader--hidden" : ""}`} aria-label="Завантаження сайту">
      <div className="preloader-card">
        <span className="preloader-logo">Promin.</span>
        <div className="preloader-line">
          <i />
        </div>
        <p>
          <b>{progress}</b>% / Target OS loading
        </p>
      </div>
    </div>
  );
}
