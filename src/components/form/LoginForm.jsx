import { Form, Button, FloatingLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginPiloto } from "../../reducers/loginReducer";

const LoginForm = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginPiloto({ usuario, password }));
    setPassword("");
    setUsuario("");
  };

  return (
    <div className="form-p">
      <h2 className="my-4 mx-auto">Hola Piloto</h2>
      <Form className="w-100 my-1 pilotos-form" onSubmit={handleLogin}>
        <Form.Group className="p-2">
          <FloatingLabel controlId="usuario" label="Usuario" className="mb-3">
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
          <FloatingLabel controlId="password" label="Password" className="mb-3">
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
          <Link className="w-100" to="/create-account">
            registrate
          </Link>
          <Button className="p-2 my-2 w-100" type="submit">
            Log in
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
