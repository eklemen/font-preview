import React, { forwardRef, useContext, useEffect } from 'react';
import CarouselItem from 'react-bootstrap/CarouselItem';
import NameInputs from '../NameInputs';
import { appStore } from '../../context/app.context';

const NameSlide = forwardRef(({ ...rest }, ref) => {
  const {
    setHideWizard,
    setInputVal,
  } = useContext(appStore);
  useEffect(() => {
    setInputVal({
      firstName: '',
      middleName: '',
    });
  }, []);
  return (
    <CarouselItem ref={ref} {...rest}>
      <div
        className="w-100"
        style={{
          height: 'auto',
          minHeight: '340px',
          display: 'flex',
          paddingBottom: '45px',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <div className="text-center mb-3">
          <h4 className="text-black">Last, enter the names you want on the board.</h4>
        </div>
        <NameInputs
          hideColorPicker
          className="flex-column m-auto w-50"
          onSubmit={() => setHideWizard(true)}
        />
      </div>
    </CarouselItem>
  );
});

export default NameSlide;
