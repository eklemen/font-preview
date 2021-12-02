import React, { useState } from 'react';
import startCase from 'lodash.startcase';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { getBlockFonts, getScriptFonts } from './fontRegistry';

function App() {
  const [inputVal, setInputVal] = useState({
    firstName: 'Name 1',
    middleName: 'Name 2'
  });
  const [scriptFonts, setScriptFonts] = useState(getScriptFonts);
  const [middleNameFonts, setMiddleNameFonts] = useState(getBlockFonts);
  const handleChange = ({ target }) => {
    if (!target.value.length) {
      setInputVal({
        ...inputVal,
        [target.name]: 'Your Name'
      });
    } else {
      setInputVal({
        ...inputVal,
        [target.name]: target.value
      });
    }
  };
  return (
    <Container>
      <Row>
        <Form as={Row}>
          <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                onChange={handleChange}
              />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Middle Name</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Enter Middle Name"
              name="middleName"
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Row>
      <Row>
        <Col xs={6}>
          {
            scriptFonts.map(({ fontFamily, size }) => (
              <Card key={fontFamily} className="mb-3  font-box">
                <Card.Body>
                  <Card.Subtitle className="mb-3 text-muted">
                    Font: <strong>{startCase(fontFamily)}</strong>
                  </Card.Subtitle>
                  <Card.Title>
                    <h2 style={{
                      fontFamily: fontFamily,
                      fontSize: `${size}rem`,
                      lineHeight: '24px'
                    }}>
                      {inputVal.firstName}
                    </h2>
                  </Card.Title>
                </Card.Body>
              </Card>
            ))
          }
        </Col>
        <Col xs={6}>
          {
            middleNameFonts.map(({ fontFamily, size }) => (
              <Card key={fontFamily} className="mb-3 font-box">
                <Card.Body>
                  <Card.Subtitle className="mb-3 text-muted">
                    Font: <strong>{startCase(fontFamily)}</strong>
                  </Card.Subtitle>
                  <Card.Title>
                    <h2 style={{
                      fontFamily: fontFamily,
                      fontSize: `${size}rem`,
                      lineHeight: '24px'
                    }}>
                      {inputVal.middleName}
                    </h2>
                  </Card.Title>
                </Card.Body>
              </Card>
            ))
          }
        </Col>
      </Row>
    </Container>
  );
}

export default App;
