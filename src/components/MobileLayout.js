import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const MobileLayout = () => {
  const [key, setKey] = useState('script');

  return (
    <Row>
      <Col>
        <Tabs
          activeKey={key}
          onSelect={k => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="script" title="Script Fonts">
            <p>Scripts</p>
          </Tab>
          <Tab eventKey="block" title="Block Fonts">
            <p>Blocks</p>
          </Tab>
        </Tabs>
      </Col>
    </Row>
  );
};

export default MobileLayout;
