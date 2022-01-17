import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import classNames from 'classnames';
import ColorSelect from './ColorSelect';
import { appStore } from '../context/app.context';

const NameInputs = (
  {
    handleChange,
    className,
    mobile,
    activeTab,
    handleColorChange,
    stacked
  }) => {
  const { scriptColor, blockColor } = useContext(appStore);
  const fnClasses = classNames({
    'd-none': mobile && activeTab === 'block'
  }, 'mb-3');
  const lnClasses = classNames({
    'd-none': mobile && activeTab === 'script',
    'ml-1': !mobile
  }, 'mb-3')
  const formClasses = classNames(className, {
    'flex-column': stacked
  })
  return (
    <Form as={Row} className={className + ' flex-column'}>
      <Form.Group as={Col} className={fnClasses} controlId="exampleForm.ControlInput1">
        <Form.Control
          size="lg"
          type="text"
          placeholder="First Name"
          name="firstName"
          className="mb-4"
          onChange={handleChange}
        />
        <ColorSelect onChange={handleColorChange} selectedColor={scriptColor} script/>
      </Form.Group>
      <Form.Group as={Col} className={lnClasses} controlId="exampleForm.ControlInput1">
        <Form.Control
          size="lg"
          type="text"
          placeholder="Middle Name"
          name="middleName"
          className="mb-4"
          onChange={handleChange}
        />
        <ColorSelect onChange={handleColorChange} selectedColor={blockColor}/>
      </Form.Group>
    </Form>
  );
};

export default NameInputs;
