import React, { useContext } from 'react';
import Col from 'react-bootstrap/Col';
import classNames from 'classnames';
import { appStore } from '../context/app.context';
import { circleStyles } from '../constants';

const StainOptionTile = ({ colorOption, closeModal }) => {
  const { proofBg, setProofBg } = useContext(appStore);

  const wrapperClasses = classNames({
    selected: proofBg.label === colorOption.label
  }, 'd-flex justify-content-center bg-option-wrapper')
  return (
    <Col xs={3} lg={2} className={wrapperClasses} onClick={() => {
      setProofBg(colorOption);
      closeModal();
    }}>
      <div className="bg-option-tile">
        <div
          className="option-color"
          style={circleStyles(colorOption)}
        />
        <p>{colorOption.label}</p>
      </div>
    </Col>
  );
};

export default StainOptionTile;
