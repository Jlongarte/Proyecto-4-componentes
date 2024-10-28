import "./Button.css";

export const Button = (texto, clase, link) => {
  return `<button class=${clase} href="${link}">${texto}</button>`;
};

export const secondButton = (texto, clase, link) => {
  return `<a class="${clase}" href="${link}" target="_blank" rel="noopener noreferrer">${texto}</a>`;
};
