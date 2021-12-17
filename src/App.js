import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import { HeartFill } from 'react-bootstrap-icons';
import { getBlockFonts, getScriptFonts } from './fontRegistry';
import FontTile from './components/FontTile';
import NameInputs from './components/NameInputs';
import ShowFavoriteButton from './components/ShowFavoriteButton';

function App() {
  const [inputVal, setInputVal] = useState({
    firstName: 'Name 1',
    middleName: 'Name 2'
  });
  const [scriptFonts, setScriptFonts] = useState(getScriptFonts);
  const [blockFonts, setBlockFonts] = useState(getBlockFonts);
  const [showFaves, setShowFaves] = useState(false);
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
      ));
      setScriptFonts(updated);
    } else {
      const updated = blockFonts.map((f) => (
        f.fontFamily === fontFamily
          ? { ...f, favorite: !f.favorite }
          : f
      ));
      setBlockFonts(updated);
    }
  };
  const renderList = (scripts = true) => {
    let list;
    if (scripts) {
      list = showFaves ?
        scriptFonts.filter((f) => f.favorite) :
        scriptFonts;
    } else {
      list = showFaves ?
        blockFonts.filter((f) => f.favorite) :
        blockFonts;
    }
    return !list.length ?
      <p>Favorite <HeartFill/> a {scripts ? 'script' : 'block'} font from this list to compare.</p>
      : list.map((font) => (<FontTile
        key={font.fontFamily}
        font={font}
        inputVal={inputVal.firstName}
        handleFavorite={handleFavorite}
      />));
  }
  return (
    <>
      <Navbar bg="light" fixed="bottom">
        <Container className="justify-content-end">
          <ShowFavoriteButton showFaves={showFaves} setShowFaves={setShowFaves}/>
        </Container>
      </Navbar>
      <Container className="mb-5 pb-5">
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
              <li>Click the heart icon <HeartFill/> to favorite fonts to compare later</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <NameInputs handleChange={handleChange}/>
        </Row>
        <Row>
          <Col xs={6}>
            <ShowFavoriteButton showFaves={showFaves} setShowFaves={setShowFaves}/>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            {renderList()}
          </Col>
          <Col xs={6}>
            {renderList(false)}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
