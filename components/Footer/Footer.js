import "./Footer.css";
import { secondButton } from "../Button/Button";

const template = () => {
  return `
    <h2>Contacto</h2>
    <div>
      ${secondButton("GitHub", "btn-footer", "https://github.com/Jlongarte")}
      ${secondButton(
        "LinkedIn",
        "btn-footer",
        "https://www.linkedin.com/in/%F0%9F%92%BB-janire-gonzalez-13aa78258/"
      )}
    </div>
    <p></p>
  `;
};

const Footer = () => {
  const footer = document.querySelector("footer");
  footer.innerHTML = template();
};

export default Footer;
