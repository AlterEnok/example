import Reveal from "./Reveal.jsx";
import TiltCard from "./TiltCard.jsx";
import React, { useState } from "react";

const cases = [
  {
    type: "E-COMMERCE",
    title: "Brand apparel launch",
    result: "4.8x",
    text: "ROAS після перебудови структури кампаній, нових оферів і ретаргетинг-сценаріїв."
  },
  {
    type: "EDTECH",
    title: "Webinar funnel",
    result: "1 860",
    text: "цільових лідів за 30 днів із контролем CPL, сегментами аудиторій і щотижневим creative refresh.",
    featured: true
  },
  {
    type: "SERVICE",
    title: "Premium clinic",
    result: "-41%",
    text: "CPA завдяки синхронізації CRM, кваліфікації заявок та новій воронці повторних дотиків."
  }
];

export default function CasesSection() {
  return (
    <section className="section cases" id="cases">
      <div className="container">
        <Reveal className="section-title center">
          <p>[ 02 ] RESULTS</p>
          <h2>Цифри, які можна показувати інвестору, команді і собі о 02:00.</h2>
        </Reveal>
        <div className="case-row">
          {cases.map((item) => (
            <Reveal key={item.title}>
              <TiltCard as="article" className={`case-panel ${item.featured ? "featured" : ""}`}>
                <small>{item.type}</small>
                <h3>{item.title}</h3>
                <b>{item.result}</b>
                <p>{item.text}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
