export default function useTheme() {
  const setInitialTheme = () => {
    const prevTheme = localStorage.getItem("theme") || "light";
    document.body.setAttribute("data-theme", prevTheme);
  };

  const toggleDarkTheme = () => {
    const nextTheme =
      localStorage.getItem("theme") === "light" ? "dark" : "light";
    localStorage.setItem("theme", nextTheme);
    document.body.setAttribute("data-theme", nextTheme);
  };

  const togglePinkTheme = () => {
    const nextTheme =
      localStorage.getItem("theme") === "light" ? "pink" : "light";
    localStorage.setItem("theme", nextTheme);
    document.body.setAttribute("data-theme", nextTheme);
  };

  return {
    setInitialTheme,
    toggleDarkTheme,
    togglePinkTheme,
  };
}
// "light" ? "dark" : "light";
