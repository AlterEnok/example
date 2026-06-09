import Reveal from "./Reveal.jsx";
import React, { useState } from "react";

const cards = [
  {
    number: "01",
    title: "Стратегічний спринт",
    text: "Розкладаємо продукт, юніт-економіку, аудиторії, офери та точки росту до запуску бюджету.",
    className: "tall"
  },
  {
    number: "02",
    title: "Creative Lab",
    text: "Робимо не банери, а креативні гіпотези: hooks, UGC, сценарії, статичні та motion-концепти."
  },
  {
    number: "03",
    title: "Media Buying",
    text: "Meta, TikTok, Google, ретаргетинг, lookalike, broad, Advantage+, каталоги і контроль якості трафіку."
  },
  {
    number: "04",
    title: "Data Room",
    text: "UTM, GA4, Pixel, CRM, events, dashboard. Власник бачить не хаос у кабінеті, а рішення: що вимкнути, що масштабувати, де гроші.",
    className: "wide"
  }
];

export default function SystemSection() {
  return (
    <section className="section system" id="system">
      <div className="container split">
        <Reveal className="section-title">
          <p>[ 01 ] SYSTEM</p>
          <h2>Не ведемо кабінет. Проєктуємо рекламну операційну систему.</h2>
        </Reveal>
        <div className="system-grid">
          {cards.map((card) => (
            <Reveal as="article" className={`glass-card ${card.className || ""}`} key={card.number}>
              <span>{card.number}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
