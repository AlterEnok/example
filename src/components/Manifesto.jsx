import Reveal from "./Reveal.jsx";
import React, { useState } from "react";

export default function Manifesto() {
  return (
    <section className="section manifesto">
      <div className="container">
        <Reveal as="p">FUELING</Reveal>
        <Reveal as="h2">
          INNOVATION
          <br />
          GROWTH
        </Reveal>
        <Reveal as="span">
          для брендів, які хочуть виглядати сильніше, продавати дорожче і масштабуватися спокійніше.
        </Reveal>
      </div>
    </section>
  );
}
