import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import classNames from 'classnames';
import ColorSelect from './ColorSelect';
import { appStore } from '../context/app.context';
import FontSelect from './FontSelect';
import Button from 'react-bootstrap/Button';

const NameInputs = (
  {
    className,
    mobile,
    activeTab,
    stacked,
    hideColorPicker,
    onSubmit
  }) => {
  const {
    scriptColor,
    blockColor,
    inputVal,
    handleNameChange,
    handleColorChange
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
  return (
    <form className="w-100" onSubmit={(e) => {
      e.preventDefault();
      onSubmit();
    }}>
      <Form as={Row} className={formClasses}>
        <Form.Group as={Col} className={fnClasses} controlId="name-inputs">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            placeholder="First Name"
            name="firstName"
            className="mb-4"
            value={inputVal.firstName}
            onChange={handleNameChange}
          />
          {
            !hideColorPicker &&
            <>
              <Form.Label>Color</Form.Label>
              <ColorSelect onChange={handleColorChange} selectedColor={scriptColor} script/>
            </>
          }
          {stacked && <FontSelect name="firstName"/>}
        </Form.Group>
        {stacked && <hr className="my-4"/>}
        <Form.Group as={Col} className={lnClasses} controlId="exampleForm.ControlInput2">
          <Form.Label>Middle Name</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Middle Name"
            name="middleName"
            value={inputVal.middleName}
            className="mb-4"
            onChange={handleNameChange}
          />
          {
            !hideColorPicker &&
            <>
              <Form.Label>Color</Form.Label>
              <ColorSelect onChange={handleColorChange} selectedColor={blockColor}/>
            </>
          }
          {stacked && <FontSelect name="middleName"/>}
        </Form.Group>
        {
          onSubmit &&
          <div
            className="d-flex align-items-center justify-content-center w-100"
            style={{marginTop: '-1em'}}
          >
            <Button
              type="submit"
              variant="outline-primary"
              style={{ width: '300px' }}
            >
              Create Mockup
            </Button>
          </div>
        }
      </Form>
    </form>
  );
};

export default NameInputs;
