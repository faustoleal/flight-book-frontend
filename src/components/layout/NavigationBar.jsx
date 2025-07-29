import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar
      expand="sm"
      className="p-4 justify-content-between navigationbar"
      style={{ backgroundColor: "#fff" }}
    >
      <Navbar.Brand href="/" style={{ color: "#7efff9" }}>
        FlightBook
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
        <Nav style={{ color: "#515151" }}>
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/libro-vuelo/"
            >
              Libro
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/libro-vuelo/agregar-hora"
            >
              Agregar Hora
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
