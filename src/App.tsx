import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';

import { createTheme, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

const theme = createTheme({
    palette: {
        // primary: {
        //     main: '#fefefe',
        // },
        secondary: purple,
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
            <Navbar />
            <Router>
                <Switch>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nulla quibusdam ut, facere nostrum tenetur iste aliquam
                    obcaecati at corporis. Id cumque eveniet velit saepe
                    molestias neque ad similique dolorem vel.
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
