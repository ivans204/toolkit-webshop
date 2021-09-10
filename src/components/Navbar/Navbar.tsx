import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    makeStyles,
    createStyles,
    AppBar,
    Toolbar,
    IconButton,
    ButtonGroup,
    Button,
    Avatar,
    Drawer,
    Theme,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import PregnantWomanIcon from '@material-ui/icons/PregnantWoman';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            padding: '0 25px',
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: 0,
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        },
    })
);

const categories = [
    { name: 'electronics', icon: <DevicesOtherIcon /> },
    { name: 'jewelery', icon: <DonutLargeIcon /> },
    { name: "men's clothing", icon: <DirectionsRunIcon /> },
    { name: "women's clothing", icon: <PregnantWomanIcon /> },
];

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

            <Drawer
                variant="permanent"
                className={`${
                    open ? classes.drawerOpen : classes.drawerClose
                } `}
                classes={{
                    paper: `${open ? classes.drawerOpen : classes.drawerClose}`,
                }}
            >
                <div className={classes.toolbar}></div>
                <Divider />
                <List>
                    {categories.map(({ name, icon }) => (
                        <ListItem
                            button
                            key={name}
                            onClick={() => history.push(name)}
                        >
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText
                                style={{ whiteSpace: 'nowrap' }}
                                primary={name}
                            />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    <ListItem button onClick={() => history.push('/cart')}>
                        <ListItemIcon>
                            <ShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText
                            style={{ whiteSpace: 'nowrap' }}
                            primary="cart"
                        />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
};
