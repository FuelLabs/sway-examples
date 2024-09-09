export const getTheme = () => {
  const theme = localStorage.getItem("theme") || "dark";
  return {
    theme,
    isDarkMode: theme === "dark",
  };
};
