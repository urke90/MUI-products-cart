import { useState } from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import BookIcon from '@mui/icons-material/Book';

import React from 'react';

interface INavMenuProps {}

const NavMenu: React.FC<INavMenuProps> = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <IconButton onClick={handleClick}>
                <MenuIcon
                    fontSize="large"
                    sx={{
                        color: 'secondary.light',
                        fontSize: '46px'
                    }}
                />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button'
                }}
            >
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <LocalGroceryStoreRoundedIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Cart</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <BookIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Books</ListItemText>
                </MenuItem>
            </Menu>
        </>
    );
};
export default NavMenu;
