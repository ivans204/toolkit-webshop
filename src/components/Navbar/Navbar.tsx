import { useHistory } from 'react-router-dom';
import {
    makeStyles,
    AppBar,
    Toolbar,
    IconButton,
    ButtonGroup,
    Button,
    Avatar,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
    root: {
        justifyContent: 'space-between',
    },
});

export const Navbar = () => {
    const history = useHistory();
    const classes = useStyles();

    return (
        <AppBar color="primary" position="static">
            <Toolbar className={classes.root}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                >
                    <MenuIcon />
                </IconButton>
                <ButtonGroup variant="text">
                    <Button onClick={() => history.push('/')}>Home</Button>
                    <Button onClick={() => history.push('/about')}>
                        About
                    </Button>
                    <Button onClick={() => history.push('/shop')}>Shop</Button>
                </ButtonGroup>
                <Avatar>I</Avatar>
            </Toolbar>
        </AppBar>
    );
};
