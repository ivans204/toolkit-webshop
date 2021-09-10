import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';

import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import PregnantWomanIcon from '@material-ui/icons/PregnantWoman';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { useStyles } from './styles';

interface NavbarDrawerProps {
    open: boolean;
}

export const NavbarDrawer: FC<NavbarDrawerProps> = ({ open }) => {
    const history = useHistory();
    const classes = useStyles();

    const categories = [
        { name: 'electronics', icon: <DevicesOtherIcon /> },
        { name: 'jewelery', icon: <DonutLargeIcon /> },
        { name: "men's clothing", icon: <DirectionsRunIcon /> },
        { name: "women's clothing", icon: <PregnantWomanIcon /> },
    ];

    return (
        <Drawer
            variant="permanent"
            className={`${open ? classes.drawerOpen : classes.drawerClose} `}
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
    );
};
