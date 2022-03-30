export const conexionLocalStorage = (key, value = undefined) => {
  if (value) {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    return JSON.parse(localStorage.getItem(key));
  }
};
