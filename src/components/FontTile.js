import React from 'react';
import Card from 'react-bootstrap/Card';
import startCase from 'lodash.startcase';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { Heart, HeartFill } from 'react-bootstrap-icons';

const FontTile = (
  {
    font,
    inputVal,
    handleFavorite,
    color
  }) => {
  const { fontFamily, size, script, favorite, displayName, styles } = font;
  const additionalStyles = color === '#ffffff' ? 'text-shadow-white' : 'text-shadow'
  return (
    <Card
      key={fontFamily}
      className="mb-3 font-box"
    >
      <Card.Body>
        <Card.Subtitle className="text-muted" style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <span>
            Font: <strong>{startCase(displayName)}</strong>
          </span>
        </Card.Subtitle>
        <Row className="h-100">
          <Col xs={10} className="d-flex align-items-center">
            <h2
              style={{
                fontFamily: fontFamily,
                fontSize: `${size}rem`,
                lineHeight: '24px',
                paddingLeft: '1rem',
                color,
                ...styles
              }}
              className={additionalStyles}
              onClick={() => handleFavorite({ script, fontFamily })}
            >
              {inputVal}
            </h2>
          </Col>
          <Col xs={2} className="d-flex align-items-center fave-btn">
            <ToggleButton
              type="checkbox"
              variant="ghost"
              checked={favorite}
              value={fontFamily}
              onClick={() => handleFavorite({ script, fontFamily })}
            >
              {favorite ? <HeartFill color="#b77b43"/> : <Heart color="#b77b43"/>}
            </ToggleButton>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
};

export default FontTile;
