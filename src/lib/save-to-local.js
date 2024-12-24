export const getTheme = () => {
  const old = localStorage.getItem("theme");
  if (old) {
    return JSON.parse(old);
  }
  return "light";
};

export const saveTheme = (theme) => {
  localStorage.setItem("theme", JSON.stringify(theme ? "dark" : "light"));
};
