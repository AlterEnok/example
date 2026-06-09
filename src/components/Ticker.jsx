const items = ["Meta Ads", "Creative Strategy", "TikTok Ads", "Lead Gen", "Scaling", "Analytics"];
import React, { useState } from "react";

export default function Ticker() {
  return (
    <section className="ticker" aria-label="Послуги">
      <div className="ticker-track">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </section>
  );
}
