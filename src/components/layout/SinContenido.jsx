import AddIcon from "@mui/icons-material/Add";
import { Button } from "react-bootstrap";

const SinContenido = () => {
  return (
    <section className="sin-contenido">
      <div>
        <h5>No tienes horas de vuelo registradas</h5>
        <Button variant="success" href="/libro-vuelo/agregar-hora">
          <AddIcon />
          <b>Anotar hora</b>
        </Button>
      </div>
    </section>
  );
};

export default SinContenido;
