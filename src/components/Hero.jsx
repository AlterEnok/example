import React, { useEffect, useRef } from "react";
import Reveal from "./Reveal.jsx";
import TiltCard from "./TiltCard.jsx";

const bars = ["34%", "56%", "42%", "76%", "62%", "88%", "92%", "72%", "96%"];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-planet" aria-hidden="true" />

      <div className="container hero-inner">
        <Reveal className="hero-kicker">
          <span>New media operating system</span>
          <a href="#request">
            Запросити аудит <b>→</b>
          </a>
        </Reveal>

        <Reveal as="h1" className="mega-title">
          TARGET OS
          <br />
          <span>для брендів</span>
          <br />
          що ростуть.
        </Reveal>

        <Reveal as="p" className="hero-copy">
          Promin Target OS - українська growth-студія для ecommerce, edtech, сервісів і personal brands.
          Будуємо таргет, креативи та аналітику як дорогу систему масштабування, а не набір випадкових кампаній.
        </Reveal>

        <Reveal className="hero-actions">
          <a className="button button-primary" href="#request">
            Запустити систему
          </a>
          <a className="button button-secondary" href="#cases">
            Дивитись кейси
          </a>
        </Reveal>

        <Reveal className="trust-strip">
          <span>Trusted by ambitious founders</span>
          <i />
          <b>Meta Ads</b>
          <b>TikTok Ads</b>
          <b>Google Ads</b>
          <b>GA4 / CRM</b>
        </Reveal>

        <Reveal>
          <TiltCard className="product-stage">
            <div className="browser-bar">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <p>promin.media/control-room</p>
            </div>
            <div className="dashboard">
              <aside className="dash-side">
                <strong>Promin</strong>
                <a className="active">Dashboard</a>
                <a>Campaigns</a>
                <a>Creative Lab</a>
                <a>Signals</a>
              </aside>
              <div className="dash-main">
                <div className="dash-head">
                  <div>
                    <p>Revenue pulse</p>
                    <strong>$482,900</strong>
                  </div>
                  <span>+132% growth</span>
                </div>
                <div className="pulse-chart" aria-hidden="true">
                  {bars.map((height) => (
                    <span key={height} style={{ "--h": height }} />
                  ))}
                </div>
                <div className="dash-cards">
                  <article>
                    <span>ROAS</span>
                    <b>4.8x</b>
                  </article>
                  <article>
                    <span>CPL</span>
                    <b>-37%</b>
                  </article>
                  <article>
                    <span>Tests</span>
                    <b>96</b>
                  </article>
                </div>
              </div>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
