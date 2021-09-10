import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { NavbarDrawer } from './NavbarDrawer';

import {
    AppBar,
    Toolbar,
    IconButton,
    ButtonGroup,
    Button,
    Avatar,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

import { useStyles } from './styles';

export const Navbar = () => {
    const history = useHistory();
    const classes = useStyles();

    const [open, setOpen] = useState<boolean>(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <AppBar
                color="secondary"
                position="static"
                className={`${classes.appBar} ${open && classes.appBarShift}`}
            >
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={!open ? handleDrawerOpen : handleDrawerClose}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <ButtonGroup variant="text">
                        <Button onClick={() => history.push('/')}>Home</Button>
                        <Button onClick={() => history.push('/about')}>
                            About
                        </Button>
                        <Button onClick={() => history.push('/shop')}>
                            Shop
                        </Button>
                        <Button onClick={() => history.push('/cart')}>
                            Cart
                        </Button>
                    </ButtonGroup>
                    <Avatar>I</Avatar>
                </Toolbar>
            </AppBar>

            <NavbarDrawer open={open} />
        </div>
    );
};
