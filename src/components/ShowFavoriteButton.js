import React from 'react';
import Button from 'react-bootstrap/Button';

const ShowFavoriteButton = ({showFaves, setShowFaves}) => {
  return showFaves
    ? (
      <Button
        variant="outline-secondary"
        className="mb-2"
        onClick={() => setShowFaves(false)}
      >Show All</Button>
    )
    : (
      <Button
        variant="outline-secondary"
        className="mb-2"
        onClick={() => setShowFaves(true)}
      >Compare Favorites</Button>
    )
};

export default ShowFavoriteButton;
