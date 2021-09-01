import { Link } from 'react-router-dom';

import {
    makeStyles,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Paper,
    Typography,
} from '@material-ui/core';

import Electronics from '../../assets/images/electronics.jpg';
import Jewelery from '../../assets/images/jewelery.jpg';
import Mens from '../../assets/images/mens.jpg';
import Womens from '../../assets/images/womens.jpg';

const useStyles = makeStyles({
    root: {
        marginTop: '25px',
    },
    imgMaxHeight: {
        maxHeight: '500px',
    },
    cardContentTitle: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        padding: 0,
        boxShadow: 'inset 0 0 0 800px rgb(0 0 0 / 50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: '0.3s',

        '& h4': { color: 'white', textTransform: 'uppercase' },

        '&:hover': {
            boxShadow: 'inset 0 0 0 800px rgb(0 0 0 / 70%)',
        },
    },
});

export const Categories = () => {
    const classes = useStyles();
    return (
        <Paper elevation={0} className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Card>
                        <CardActionArea component={Link} to="/electronics">
                            <CardContent className={classes.cardContentTitle}>
                                <Typography variant="h4">
                                    Electronics
                                </Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                image={Electronics}
                                alt="Electronics category"
                                title="Electronics category"
                                className={classes.imgMaxHeight}
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardActionArea component={Link} to="/men's clothing">
                            <CardContent className={classes.cardContentTitle}>
                                <Typography variant="h4">Mens</Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                image={Mens}
                                alt="Mens category"
                                title="Mens category"
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardActionArea component={Link} to="/jewelery">
                            <CardContent className={classes.cardContentTitle}>
                                <Typography variant="h4">Jewelery</Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                image={Jewelery}
                                alt="Jewelery category"
                                title="Jewelery category"
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Card>
                        <CardActionArea component={Link} to="/women's clothing">
                            <CardContent className={classes.cardContentTitle}>
                                <Typography variant="h4">Womens</Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                image={Womens}
                                alt="Womens category"
                                title="Womens category"
                                className={classes.imgMaxHeight}
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Paper>
    );
};
