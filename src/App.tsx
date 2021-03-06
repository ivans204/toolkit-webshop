import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
    createTheme,
    makeStyles,
    ThemeProvider,
    Container,
} from '@material-ui/core';
import { Navbar } from 'components/Navbar';
import { ShopPage } from 'pages/ShopPage';
import { Categories } from 'pages/Categories';
import { Cart } from 'pages/Cart';
import { Checkout } from 'pages/Checkout';

const theme = createTheme({
    palette: {
        secondary: {
            main: '#fefefe',
        },
    },
    typography: {
        fontFamily: 'Poppins',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    },
});

const useStyles = makeStyles({
    root: {
        marginTop: '25px',
    },
});

function App() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Navbar />
                <Container className={classes.root}>
                    <Switch>
                        <Route path="/about">
                            <div>ABOUT</div>
                        </Route>
                        <Route path="/shop">
                            <Categories />
                        </Route>
                        <Route path="/electronics">
                            <ShopPage categoryName="electronics" />
                        </Route>
                        <Route path="/jewelery">
                            <ShopPage categoryName="jewelery" />
                        </Route>
                        <Route path="/men's clothing">
                            <ShopPage categoryName="men's clothing" />
                        </Route>
                        <Route path="/women's clothing">
                            <ShopPage categoryName="women's clothing" />
                        </Route>
                        <Route path="/cart">
                            <Cart />
                        </Route>
                        <Route path="/checkout">
                            <Checkout />
                        </Route>
                        <Route exact path="/">
                            <div>HOME</div>
                        </Route>
                    </Switch>
                </Container>
            </Router>
        </ThemeProvider>
    );
}

export default App;
