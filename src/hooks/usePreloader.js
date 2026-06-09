import { useEffect, useState } from "react";

export function usePreloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProgress((value) => Math.min(value + Math.ceil(Math.random() * 12), 96));
    }, 80);

    const finish = () => {
      window.setTimeout(() => {
        window.clearInterval(timer);
        setProgress(100);
        setIsLoaded(true);
      }, 520);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      window.clearInterval(timer);
      window.removeEventListener("load", finish);
    };
  }, []);

  return { progress, isLoaded };
}
