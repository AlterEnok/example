import { useReveal } from "../hooks/useReveal.js";
import React, { useState } from "react";

export default function Reveal({ as: Tag = "div", className = "", children, ...props }) {
  const ref = useReveal();

  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}
