import React, { useState } from 'react';
import {
  Button,
  Menu,
  MenuItem
} from '@mui/material';
import { Link } from 'react-router-dom'; // Change if using Next.js

const Collection = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="collection-button"
        aria-controls={open ? 'collection-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ color: '#000', fontWeight: 'bold' }}
      >
        Collection
      </Button>

      <Menu
        id="collection-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'collection-button',
        }}
      >
        <MenuItem onClick={handleClose} component={Link} to="/collections/modern">Modern</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/collections/rustic">Rustic</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/collections/classic">Classic</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/collections/bedroom">Bedroom</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/collections/living-room">Living Room</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/collections/gift">Gift Collection</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/collections/new">New Arrivals</MenuItem>
      </Menu>
    </>
  );
};

export default Collection;
