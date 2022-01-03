import React from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import classNames from 'classnames';

const NameInputs = ({handleChange, className, mobile, activeTab}) => {
  const fnClasses = classNames({
    'd-none': mobile && activeTab === 'block',
  }, 'mb-3');
  const lnClasses = classNames({
    'd-none': mobile && activeTab === 'script',
    'ml-1': !mobile,
  }, 'mb-3')
  return (
    <Form as={Row} className={className}>
      <Form.Group as={Col} className={fnClasses} controlId="exampleForm.ControlInput1">
        <Form.Control
          size="lg"
          type="text"
          placeholder="Enter Name"
          name="firstName"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group as={Col} className={lnClasses} controlId="exampleForm.ControlInput1">
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
