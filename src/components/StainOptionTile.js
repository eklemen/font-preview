import React, { useContext } from 'react';
import Col from 'react-bootstrap/Col';
import classNames from 'classnames';
import { appStore } from '../context/app.context';

const StainOptionTile = ({ colorOption }) => {
  const { proofBg, setProofBg } = useContext(appStore);
  const optStyles = colorOption.stain
    ? {
      backgroundImage: `url(${colorOption.color})`
    }
    : {
      backgroundColor: colorOption.color,
      border: colorOption.value === 'white' ?
        '1px solid #aaa' : 'none'
    };
  const wrapperClasses = classNames({
    selected: proofBg.label === colorOption.label
  }, 'd-flex justify-content-center bg-option-wrapper')
  return (
    <Col xs={3} lg={2} className={wrapperClasses} onClick={() => setProofBg(colorOption)}>
      <div className="bg-option-tile">
        <div
          className="option-color"
          style={optStyles}
        />
        <p>{colorOption.label}</p>
      </div>
    </Col>
  );
};

export default StainOptionTile;
