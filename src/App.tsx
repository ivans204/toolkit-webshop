import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
    createTheme,
    makeStyles,
    ThemeProvider,
    Container,
} from '@material-ui/core';
import { Navbar } from 'components/Navbar';
// import { ShopPage } from 'pages/shop/ShopPage';
import { Categories } from 'pages/Categories';

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
                            <h1>Electronics</h1>
                        </Route>
                        <Route path="/jewelery">
                            <h1>jew</h1>
                        </Route>
                        <Route path="/mens">
                            <h1>mens</h1>
                        </Route>
                        <Route path="/womens">
                            <h1>womens</h1>
                        </Route>
                        <Route path="/">
                            <div>HOME</div>
                        </Route>
                    </Switch>
                </Container>
            </Router>
        </ThemeProvider>
    );
}

export default App;
