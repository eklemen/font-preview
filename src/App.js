import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HeartFill } from 'react-bootstrap-icons';
import { getBlockFonts, getScriptFonts } from './fontRegistry';
import FontTile from './components/FontTile';
import NameInputs from './components/NameInputs';
import ShowFavoriteButton from './components/ShowFavoriteButton';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import NavTop from './components/NavTop';
import NavBottom from './components/NavBottom';
import WavyBanner from './components/WavyBanner';

function App() {
  const [inputVal, setInputVal] = useState({
    firstName: 'Name 1',
    middleName: 'Name 2'
  });
  const [scriptFonts, setScriptFonts] = useState(getScriptFonts);
  const [blockFonts, setBlockFonts] = useState(getBlockFonts);
  const [showFaves, setShowFaves] = useState(false);
  const [activeTab, setActiveTab] = useState('script');
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
        inputVal={scripts ? inputVal.firstName : inputVal.middleName}
        handleFavorite={handleFavorite}
      />));
  }
  const visibleXs = 'd-flex d-sm-none';
  const visibleAboveXs = 'd-none d-sm-flex';
  return (
    <>
      <NavTop/>
      <NavBottom
        showFaves={showFaves}
        setShowFaves={setShowFaves}/>
      <div className="mb-5 pb-5">
        <WavyBanner />
        <Container>
          <Row>
            <NameInputs className={visibleAboveXs} handleChange={handleChange}/>
            <NameInputs
              className={visibleXs}
              mobile
              activeTab={activeTab}
              handleChange={handleChange}
            />
          </Row>
          <Row className={visibleAboveXs}>
            <Col xs={6}>
              <ShowFavoriteButton showFaves={showFaves} setShowFaves={setShowFaves}/>
            </Col>
          </Row>
          <Row className={visibleAboveXs}>
            <Col xs={6}>
              <h3>Script Fonts</h3>
              {renderList()}
            </Col>
            <Col xs={6}>
              <h3>Block Fonts</h3>
              {renderList(false)}
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className={visibleXs}>
            <Col>
              <Tabs
                activeKey={activeTab}
                onSelect={k => setActiveTab(k)}
                className="mb-3"
              >
                <Tab eventKey="script" title="Script Fonts">
                  {renderList()}
                </Tab>
                <Tab eventKey="block" title="Block Fonts">
                  {renderList(false)}
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
