import { GitHub, Email, LinkedIn } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/libro-vuelo">Libro de Vuelo</Link>
        <Link to="/libro-vuelo/agregar-hora">Agregar hora</Link>
      </nav>
      <div className="contact">
        <a href="https://www.linkedin.com/in/fausto-leal-/">
          {" "}
          <LinkedIn />
          /fausto-leal-/
        </a>
        <a href="https://github.com/faustoleal">
          <GitHub />
          /faustoleal
        </a>
        <span>
          <Email />
          fausto.leal2099@gmail.com
        </span>
      </div>
      <address>
        developed by{" "}
        <a href="https://www.linkedin.com/in/fausto-leal-/">Fausto</a>
      </address>
    </footer>
  );
};

export default Footer;
