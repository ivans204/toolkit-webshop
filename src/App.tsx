import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';

import { createTheme, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
    palette: {
        primary: {
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
                        <div>Shop</div>
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
