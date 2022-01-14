import React, { useState } from 'react';
import { getBlockFonts, getScriptFonts } from '../fontRegistry';
import { HeartFill } from 'react-bootstrap-icons';
import FontTile from '../components/FontTile';
import NavTop from '../components/NavTop';
import NavBottom from '../components/NavBottom';
import WavyBanner from '../components/WavyBanner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import NameInputs from '../components/NameInputs';
import Col from 'react-bootstrap/Col';
import ShowFavoriteButton from '../components/ShowFavoriteButton';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const FontPicker = () => {
  const [inputVal, setInputVal] = useState({
    firstName: 'Name 1',
    middleName: 'Name 2'
  });
  const [scriptFonts, setScriptFonts] = useState(getScriptFonts);
  const [blockFonts, setBlockFonts] = useState(getBlockFonts);
  const [showFaves, setShowFaves] = useState(false);
  const [activeTab, setActiveTab] = useState('script');
  const [scriptColor, setScriptColor] = useState({ value: 'black', label: 'Black', color: '#000000'});
  const [blockColor, setBlockColor] = useState({ value: 'black', label: 'Black', color: '#000000'});
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
  const handleColorChange = ({script, ...rest}) => {
    script ? setScriptColor(rest) : setBlockColor(rest);
  };
  const renderList = (scripts = true) => {
    let list;
    let color = { value: 'black', label: 'Black', color: '#000000'};
    if (scripts) {
      color = scriptColor;
      list = showFaves ?
        scriptFonts.filter((f) => f.favorite) :
        scriptFonts;
    } else {
      color = blockColor;
      list = showFaves ?
        blockFonts.filter((f) => f.favorite) :
        blockFonts;
    }
    return !list.length ?
      <p>Favorite <HeartFill/> a {scripts ? 'script' : 'block'} font from this list to compare.</p>
      : list.map((font) => (<FontTile
        key={font.fontFamily}
        font={font}
        color={color.color}
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
          <Row className={visibleAboveXs}>
            <Col xs={6}>
              <h3>Script Fonts</h3>
            </Col>
            <Col xs={6}>
              <h3>Block Fonts</h3>
            </Col>
          </Row>
          <Row>
            <NameInputs className={visibleAboveXs} handleChange={handleChange} handleColorChange={handleColorChange}/>
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
              {/*<h3>Script Fonts</h3>*/}
              {renderList()}
            </Col>
            <Col xs={6}>
              {/*<h3>Block Fonts</h3>*/}
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
};

export default FontPicker;
