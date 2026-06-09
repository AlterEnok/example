import Reveal from "./Reveal.jsx";
import React, { useState } from "react";

export default function RequestSection() {
  return (
    <section className="section request" id="request">
      <div className="container request-grid">
        <Reveal className="section-title">
          <p>[ 04 ] REQUEST</p>
          <h2>Покажіть продукт. Ми покажемо, де в рекламі лежить ріст.</h2>
          <div className="request-note">
            <span>48 год</span>
            <p>до першої карти гіпотез після брифу</p>
          </div>
        </Reveal>
        <Reveal as="form" className="request-form">
          <label>
            <span>Ваше ім'я</span>
            <input type="text" placeholder="Наприклад, Артем" />
          </label>
          <label>
            <span>Контакт</span>
            <input type="text" placeholder="@telegram або email" />
          </label>
          <label>
            <span>Бюджет на місяць</span>
            <select defaultValue="$1 000 - $3 000">
              <option>$1 000 - $3 000</option>
              <option>$3 000 - $10 000</option>
              <option>$10 000+</option>
            </select>
          </label>
          <label>
            <span>Що продаєте?</span>
            <textarea rows="4" placeholder="Коротко про нішу, продукт, цілі та поточну рекламу" />
          </label>
          <button className="button button-primary" type="submit">
            Отримати стратегію
          </button>
        </Reveal>
      </div>
    </section>
  );
}
