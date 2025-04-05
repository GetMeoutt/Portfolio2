// github-contribution.tsx
"use client";

import { useEffect } from "react";

export default function GithubContribution() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.defer = true;
    script.src = "https://cdn.jsdelivr.net/gh/imananoosheh/github-contributions-fetch@latest/github_calendar_widget.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="self-center flex justify-center">
      
  <div id="calendar-component" username="Getmeoutt" theme-color="#818cf8" background-color="#141311"></div>
  </div>);
}
