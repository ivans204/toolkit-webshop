import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@material-ui/core';
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

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Navbar />
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
            </Router>
        </ThemeProvider>
    );
}

export default App;
