import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const DropMenu = () => {
  const [ anchorEl, setAnchorEl ] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label='more'
        aria-controls='long-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id='long-menu'
        className='menu'
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            // maxHeight: ITEM_HEIGHT * 4.5,
            width: '15ch',
            backgroundColor: '#fafafa'
          }
        }}
        elevation={0}
        square='true'
      >
        <MenuItem>
          <a href='../about/'>About</a>
        </MenuItem>
        <MenuItem>
          <a href='../donate/'>Donate</a>
        </MenuItem>
        <MenuItem>
          <a href='../how_can_i_help/'>How</a>
        </MenuItem>
        <MenuItem>
          <a href='../hygiene/'>Hygiene</a>
        </MenuItem>
        <MenuItem>
          <a href='../press/'>Press</a>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default DropMenu;
