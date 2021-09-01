import { Link } from 'react-router-dom';

import {
    makeStyles,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from '@material-ui/core';

import Electronics from '../../assets/images/electronics.jpg';
import Jewelery from '../../assets/images/jewelery.jpg';
import Mens from '../../assets/images/mens.jpg';
import Womens from '../../assets/images/womens.jpg';

const useStyles = makeStyles({
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

    const categoriesData = [
        {
            name: 'electronics',
            img: Electronics,
        },
        {
            name: "men's clothing",
            img: Mens,
        },
        {
            name: 'jewelery',
            img: Jewelery,
        },
        {
            name: "women's clothing",
            img: Womens,
        },
    ];

    return (
        <Grid container spacing={2}>
            {categoriesData.map(({ name, img }, index) => (
                <Grid
                    item
                    key={name}
                    xs={12}
                    sm={index !== 0 ? 6 : 12}
                    md={index !== 0 ? 4 : 12}
                >
                    <Card>
                        <CardActionArea component={Link} to={`/${name}`}>
                            <CardContent className={classes.cardContentTitle}>
                                <Typography variant="h4">{name}</Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                image={img}
                                alt={name}
                                title={name}
                                className={classes.imgMaxHeight}
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};
