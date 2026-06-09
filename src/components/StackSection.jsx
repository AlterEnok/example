import Reveal from "./Reveal.jsx";
import TiltCard from "./TiltCard.jsx";
import React, { useState } from "react";

const stack = [
  "Аудит рекламних кабінетів",
  "Архітектура кампаній",
  "Креативні матриці",
  "Пікселі та події",
  "CRM-аналітика",
  "Щотижневий growth-call"
];

export default function StackSection() {
  return (
    <section className="section stack" id="stack">
      <div className="container split reverse">
        <Reveal>
          <TiltCard className="stack-visual">
            <div className="card-orbit c1">Meta</div>
            <div className="card-orbit c2">TikTok</div>
            <div className="card-orbit c3">GA4</div>
            <div className="card-orbit c4">CRM</div>
            <div className="core-card">
              <span>Target OS</span>
              <strong>Growth Engine</strong>
            </div>
          </TiltCard>
        </Reveal>
        <Reveal className="section-title">
          <p>[ 03 ] STACK</p>
          <h2>Збираємо performance-стек під реальний бізнес, а не під красивий звіт.</h2>
          <div className="stack-list">
            {stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
