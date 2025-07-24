import { Form, Button, FloatingLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPiloto } from "../../reducers/pilotosReducer";

const CreateAccount = () => {
  const [name, setName] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleCreatePiloto = (e) => {
    e.preventDefault();
    dispatch(createPiloto({ name, usuario, password }));
    setName("");
    setPassword("");
    setUsuario("");
  };

  return (
    <div className="form-p">
      <h2 className="my-4 mx-auto">Registrate</h2>
      <Form className="w-100 my-1 pilotos-form" onSubmit={handleCreatePiloto}>
        <Form.Group className="p-2">
          <FloatingLabel controlId="name" label="Full name" className="mb-3">
            <Form.Control
              type="text"
              name="name"
              placeholder="name"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="p-2">
          <FloatingLabel controlId="username" label="Username" className="mb-3">
            <Form.Control
              type="text"
              name="usuario"
              placeholder="usuario"
              value={usuario}
              onChange={({ target }) => setUsuario(target.value)}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="p-2">
          <FloatingLabel controlId="Password" label="Password" className="mb-3">
            <Form.Control
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </FloatingLabel>
        </Form.Group>
        <div className="buttons p-2 d-flex flex-wrap">
          <Link className="w-100" to="/login">
            Iniciar sesion
          </Link>
          <Button className="p-2 my-2 w-100" type="submit">
            Crear cuenta
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateAccount;
