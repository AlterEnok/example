import React, { useEffect, useRef } from "react";

export default function CursorLight() {
  const ref = useRef(null);

  useEffect(() => {
    const onPointerMove = (event) => {
      if (!ref.current) return;
      ref.current.style.left = `${event.clientX}px`;
      ref.current.style.top = `${event.clientY}px`;
    };

    window.addEventListener("pointermove", onPointerMove);
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  return <div ref={ref} className="cursor-light" aria-hidden="true" />;
}
