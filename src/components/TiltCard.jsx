import { useTilt } from "../hooks/useTilt.js";
import React, { useState } from "react";

export default function TiltCard({ as: Tag = "div", className = "", children, ...props }) {
  const ref = useTilt();

  return (
    <Tag ref={ref} className={className} {...props}>
      {children}
    </Tag>
  );
}
