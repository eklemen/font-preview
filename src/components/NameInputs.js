import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import classNames from 'classnames';
import ColorSelect from './ColorSelect';
import { appStore } from '../context/app.context';
import FontSelect from './FontSelect';

const NameInputs = (
  {
    handleChange,
    className,
    mobile,
    activeTab,
    handleColorChange,
    stacked
  }) => {
  const {
    scriptColor,
    blockColor,
    inputVal,
  } = useContext(appStore);
  const fnClasses = classNames({
    'd-none': mobile && activeTab === 'block'
  }, 'mb-3');
  const lnClasses = classNames({
    'd-none': mobile && activeTab === 'script',
    'ml-1': !mobile
  }, 'mb-3')
  const formClasses = classNames(className, {
    'flex-column': stacked
  });
  const secondNameClasses = classNames('mb-4', {
    'mt-3': stacked
  });
  return (
    <Form as={Row} className={formClasses}>
      <Form.Group as={Col} className={fnClasses} controlId="exampleForm.ControlInput1">
        <Form.Control
          size="lg"
          type="text"
          placeholder="First Name"
          name="firstName"
          className="mb-4"
          value={inputVal.firstName}
          onChange={handleChange}
        />
        <ColorSelect onChange={handleColorChange} selectedColor={scriptColor} script/>
        {stacked && <FontSelect name="firstName" />}
      </Form.Group>
      {stacked && <hr className="my-4"/>}
      <Form.Group as={Col} className={lnClasses} controlId="exampleForm.ControlInput2">
        <Form.Control
          size="lg"
          type="text"
          placeholder="Middle Name"
          name="middleName"
          value={inputVal.middleName}
          className={secondNameClasses}
          onChange={handleChange}
        />
        <ColorSelect onChange={handleColorChange} selectedColor={blockColor}/>
        {stacked && <FontSelect name="middleName"/>}
      </Form.Group>
    </Form>
  );
};

export default NameInputs;
