import { InputGroup, Form } from "react-bootstrap";

const DiscriminacionInput = ({ label, ...props }) => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text>{label}</InputGroup.Text>
      <Form.Control {...props} />
    </InputGroup>
  );
};

export default DiscriminacionInput;
