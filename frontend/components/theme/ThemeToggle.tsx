"use client";
import { useEffect, useState } from "react";
import s from "./ThemeToggle.module.scss";

type Theme = "light" | "dark";
type Accent = "blue" | "purple";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [accent, setAccent] = useState<Accent>("blue");

  useEffect(() => {
    const savedTheme  = (localStorage.getItem("theme") as Theme)  || "dark";
    const savedAccent = (localStorage.getItem("accent") as Accent) || "blue";
    applyTheme(savedTheme);
  }, []);

  function applyTheme(t: Theme) {
    setTheme(t);
    document.documentElement.dataset.theme = t;
    localStorage.setItem("theme", t);
  }

  return (
    <div className={s.toggle} aria-label="Theme">
      {/* dark */}
      <button
        className={`${s.dot} ${s.dark} ${theme === "dark" ? s.active : ""}`}
        aria-label="Dark theme"
        aria-pressed={theme === "dark"}
        title="Dark theme"
        onClick={() => applyTheme("dark")}
      />
      {/* light */}
      <button
        className={`${s.dot} ${s.light} ${theme === "light" ? s.active : ""}`}
        aria-label="Light theme"
        aria-pressed={theme === "light"}
        title="Light theme"
        onClick={() => applyTheme("light")}
      />
    </div>
  );
}
