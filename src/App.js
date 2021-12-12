import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { HeartFill } from 'react-bootstrap-icons';
import { getBlockFonts, getScriptFonts } from './fontRegistry';
import FontTile from './FontTile';

function App() {
  const [inputVal, setInputVal] = useState({
    firstName: 'Name 1',
    middleName: 'Name 2'
  });
  const [scriptFonts, setScriptFonts] = useState(getScriptFonts);
  const [blockFonts, setBlockFonts] = useState(getBlockFonts);
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
  const handleFavorite = ({ script, fontFamily }) => {
    if (Boolean(script)) {
      const updated = scriptFonts.map((f) => (
        f.fontFamily === fontFamily
          ? { ...f, favorite: !f.favorite }
          : f
      ))
      setScriptFonts(updated);
    } else {
      const updated = blockFonts.map((f) => (
        f.fontFamily === fontFamily
          ? { ...f, favorite: !f.favorite }
          : f
      ))
      setBlockFonts(updated);
    }
  };
  const showFavorites = () => {
    // const scripts = scriptFonts.filter((f) => !f.favorite);
    // const blocks = blockFonts.filter((f) => !f.favorite);
    // setScriptFonts(scripts);
    // setBlockFonts(blocks);
  };
  return (
    <Container>
      <Row>
        <h1>Font Preview</h1>
      </Row>
      <Row>
        <Col>
          <h3>Tips for selecting fonts</h3>
          <ul>
            <li>Type your name into each input below</li>
            <li>Left column are script fonts</li>
            <li>Right column are block fonts</li>
            <li>Typically girl's names are script first name and block middle names</li>
            <li>Typically boy's names are block first names and script middle names</li>
            <li>Click the heart icon <HeartFill /> to favorite fonts to compare later</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Form as={Row}>
          <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              size="lg"
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-3 ml-1" controlId="exampleForm.ControlInput1">
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
        <Col>
          <Button
            variant="outline-primary"
            className="mb-2"
            onClick={() => showFavorites(true)}
          >Compare Favorites</Button>
          {/*<Button*/}
          {/*  variant="outline-primary"*/}
          {/*  className="mb-2">Show All</Button>*/}
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          {
            scriptFonts.map((font) => (
              <FontTile
                font={font}
                inputVal={inputVal.firstName}
                handleFavorite={handleFavorite}
              />
            ))
          }
        </Col>
        <Col xs={6}>
          {
            blockFonts.map((font) => (
              <FontTile
                font={font}
                inputVal={inputVal.middleName}
                handleFavorite={handleFavorite}
              />
            ))
          }
        </Col>
      </Row>
    </Container>
  );
}

export default App;
