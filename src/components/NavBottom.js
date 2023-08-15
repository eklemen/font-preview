import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import ShowFavoriteButton from './ShowFavoriteButton';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const NavBottom = ({ showFaves, setShowFaves }) => {
  const referrer = useRef(document.referrer);
  const showBackLink = referrer.current.includes('etsy');
  return (
    <Navbar bg="light" fixed="bottom">
      <Container className="justify-content-end">
        {
          showBackLink &&
          <Button
            variant="link"
            onClick={() => {
              window.location.href = referrer.current
            }}>
            Go To Etsy Listing
          </Button>
        }
        <Link
          style={{
            marginRight: '8px'
          }}
          className="mb-2"
          role="button"
          to="proof">
          <Button variant="outline-secondary">
            View Mockup Generator
          </Button>
        </Link>
        <ShowFavoriteButton showFaves={showFaves} setShowFaves={setShowFaves}/>
      </Container>
    </Navbar>
  );
};

export default NavBottom;
