import { Form, Button, FloatingLabel, Modal } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createAvion } from "../../reducers/avionesReducer";

const AvionForm = ({ show, setShow }) => {
  const [matricula, setMatricula] = useState("");
  const [modelo, setModelo] = useState("");
  const [potencia, setPotencia] = useState("");
  const [clase, setClase] = useState("");

  const dispatch = useDispatch();

  const handleCreateAvion = (e) => {
    e.preventDefault();
    dispatch(createAvion({ matricula, modelo, potencia, clase }));
    setShow(false);
    setMatricula("");
    setModelo("");
    setPotencia("");
    setClase("");
  };

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar avion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="w-100 p-2">
          <div className="avion-form">
            <Form.Group className="p-2 avion-item">
              <FloatingLabel
                controlId="matricula"
                label="Matricula"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="matricula"
                  placeholder="matricula"
                  value={matricula}
                  onChange={({ target }) => setMatricula(target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="p-2 avion-item">
              <FloatingLabel controlId="modelo" label="Modelo" className="mb-3">
                <Form.Control
                  type="text"
                  name="modelo"
                  placeholder="modelo"
                  value={modelo}
                  onChange={({ target }) => setModelo(target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="p-2 avion-item">
              <FloatingLabel
                controlId="potencia"
                label="Potencia"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="potencia"
                  placeholder="potencia"
                  value={potencia}
                  onChange={({ target }) => setPotencia(target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="p-2 avion-item">
              <FloatingLabel controlId="clase" label="Clase" className="mb-3">
                <Form.Control
                  type="text"
                  name="clase"
                  placeholder="clase"
                  value={clase}
                  onChange={({ target }) => setClase(target.value)}
                />
              </FloatingLabel>
            </Form.Group>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
        <Button variant="primary" type="submit" onClick={handleCreateAvion}>
          Agregar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AvionForm;
