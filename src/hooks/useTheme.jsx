import { useState, useEffect } from "react";
import { conexionLocalStorage } from "../utils/conexionLocalStorage";

export const useTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localTheme = conexionLocalStorage("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else {
      conexionLocalStorage("theme", "light");
    }
  }, []);

  useEffect(() => {
    console.log(theme);
    const html = document.querySelector("html");
    if (html.classList.contains("dark") && theme === "light") {
      html.classList.remove("dark");
    }
    if (!html.classList.contains("dark") && theme === "dark") {
      html.classList.add("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      conexionLocalStorage("theme", "dark");
    } else {
      setTheme("light");
      conexionLocalStorage("theme", "light");
    }
  };

  return [theme, handleTheme];
};
