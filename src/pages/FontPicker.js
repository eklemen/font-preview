import React, { useContext, useState } from 'react';
import { HeartFill } from 'react-bootstrap-icons';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FontTile from '../components/FontTile';
import NavTop from '../components/NavTop';
import NavBottom from '../components/NavBottom';
import WavyBanner from '../components/WavyBanner';
import NameInputs from '../components/NameInputs';
import ShowFavoriteButton from '../components/ShowFavoriteButton';
import FontPreviewHeader from '../components/FontPreviewHeader';
import { appStore } from '../context/app.context';

const FontPicker = () => {
  const [showFaves, setShowFaves] = useState(false);
  const [activeTab, setActiveTab] = useState('script');
  const {
    inputVal,
    scriptFonts, setScriptFonts,
    blockFonts, setBlockFonts,
    scriptColor,
    blockColor,
  } = useContext(appStore);
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
    let color = { value: 'black', label: 'Black', color: '#000000' };
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
  const visibleSm = 'd-flex d-md-none';
  const visibleAboveSm = 'd-none d-md-flex';
  return (
    <>
      <NavTop/>
      <NavBottom
        showFaves={showFaves}
        setShowFaves={setShowFaves}/>
      <div className="mb-5 pb-5">
        <WavyBanner header={<FontPreviewHeader/>}/>
        <Container>
          <Row className={visibleAboveSm}>
            <Col xs={6}>
              <h3>Script Fonts</h3>
            </Col>
            <Col xs={6} className="p-0">
              <h3>Block Fonts</h3>
            </Col>
          </Row>
          <Row>
            <NameInputs
              className={visibleAboveSm}
            />
            <NameInputs
              className={visibleSm}
              mobile
              activeTab={activeTab}
            />
          </Row>
          <Row className={visibleAboveSm}>
            <Col xs={6}>
              <ShowFavoriteButton showFaves={showFaves} setShowFaves={setShowFaves}/>
            </Col>
          </Row>
          <Row className={visibleAboveSm}>
            <Col xs={6}>
              {renderList()}
            </Col>
            <Col xs={6}>
              {renderList(false)}
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className={visibleSm}>
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
