import Card from 'react-bootstrap/Card';
import startCase from 'lodash.startcase';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { Heart, HeartFill } from 'react-bootstrap-icons';
import React from 'react';

const FontTile = (
  {
    font,
    inputVal,
    handleFavorite
  }) => {
  const { fontFamily, size, script, favorite } = font;
  return (
    <Card key={fontFamily} className="mb-3  font-box">
      <Card.Body>
        <Card.Subtitle className="mb-3 text-muted">
          Font: <strong>{startCase(fontFamily)}</strong>
        </Card.Subtitle>
        <Card.Title>
          <Row>
            <Col xs={10}>
              <h2 style={{
                fontFamily: fontFamily,
                fontSize: `${size}rem`,
                lineHeight: '24px'
              }}>
                {inputVal}
              </h2>
            </Col>
            <Col xs={2}>
              <ToggleButton
                type="checkbox"
                variant="link"
                checked={favorite}
                value={fontFamily}
                onClick={() => handleFavorite({ script, fontFamily })}
              >
                {favorite ? <HeartFill /> : <Heart />}
              </ToggleButton>
            </Col>
          </Row>
        </Card.Title>
      </Card.Body>
    </Card>
  )
};

export default FontTile;
