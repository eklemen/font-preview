import React, { useContext, useState, useEffect } from 'react';
import { appStore } from '../context/app.context';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Clipboard, ClipboardCheck } from 'react-bootstrap-icons';

const Summary = () => {
  const {
    inputVal,
    scriptColor,
    blockColor,
    proofFont,
    proofBg
  } = useContext(appStore);
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    setCopied(true);
    navigator.clipboard.writeText(`
First Name: ${inputVal.firstName}
Color: ${scriptColor.label}
Font: ${proofFont.firstName.label}

Middle Name: ${inputVal.middleName}
Color: ${blockColor.label}
Font: ${proofFont.middleName.label}

Circle Color: ${proofBg.label}`);
  }
  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2500);
    }
  }, [copied]);
  return (
    <Row className="mt-4">
      <hr/>
      <Col xs={12}>
        <Row>
          <Col xs={12} sm={12}>
            <p style={{ marginLeft: '0.75rem', marginBottom: 0 }}>Copy details to easily paste into your etsy order.</p>
            {
              copied ?
                <p style={{
                  width: 231,
                  lineHeight: '1.5',
                  padding: '0.375rem 0.75rem'
                }}
                   className="text-success m-0"><ClipboardCheck/> Text copied!</p> :
                <Button
                  variant="link"
                  onClick={copyToClipboard}
                >
                  Click to copy your details
                  <Clipboard className="mx-1"/>
                </Button>
            }
          </Col>
          {/*<Col xs={12} sm={6} >*/}
          {/*  {*/}
          {/*    copied ?*/}
          {/*      <p style={{*/}
          {/*        width: 231,*/}
          {/*        textAlign: 'left',*/}
          {/*        float: 'right',*/}
          {/*        lineHeight: '1.5',*/}
          {/*        padding: '0.375rem 0.75rem'*/}
          {/*      }}*/}
          {/*         className="text-success m-0"><ClipboardCheck /> Text copied!</p> :*/}
          {/*      <Button*/}
          {/*        variant="link"*/}
          {/*        onClick={copyToClipboard}*/}
          {/*      >*/}
          {/*        Click to copy your details*/}
          {/*        <Clipboard className="mx-1" />*/}
          {/*      </Button>*/}
          {/*  }*/}
          {/*</Col>*/}
        </Row>

      </Col>
      <Col xs={{ offset: 1, span: 5 }}>
        <p className="m-0">
          <strong>First Name: </strong>
          {inputVal.firstName}
        </p>
        <p className="m-0">
          <strong>Color: </strong>
          {scriptColor.label}
        </p>
        <p className="m-0">
          <strong>Font: </strong>
          {proofFont.firstName.label}
        </p>
      </Col>
      <Col xs={6}>
        <p className="m-0">
          <strong>Middle Name: </strong>
          {inputVal.middleName}
        </p>
        <p className="m-0">
          <strong>Color: </strong>
          {blockColor.label}
        </p>
        <p className="m-0">
          <strong>Font: </strong>
          {proofFont.middleName.label}
        </p>
        <p className="m-0">
          <strong>Circle Color:</strong>
          {proofBg.label}
        </p>
      </Col>
    </Row>
  );
};

export default Summary;
