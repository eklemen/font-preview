import React from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const NameInputs = ({handleChange}) => {
  return (
    <Form as={Row}>
      <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control
          size="lg"
          type="text"
          placeholder="Enter Name"
          name="firstName"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group as={Col} className="mb-3 ml-1" controlId="exampleForm.ControlInput1">
        <Form.Control
          size="lg"
          type="text"
          placeholder="Enter Name"
          name="middleName"
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
};

export default NameInputs;
