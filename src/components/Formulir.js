import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../components/pages.css";

function Formulir() {
  return (
    <div
      id="Formulir"
      className="mt-0 text-center text-white d-flex justify-content-center"
    >
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Formulir;
