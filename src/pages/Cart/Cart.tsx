import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from 'features/cart/cartSlice';

import {
    makeStyles,
    createStyles,
    Button,
    Card,
    CardHeader,
    CardContent,
    CardMedia,
    Divider,
    Paper,
    Grid,
    Theme,
} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        cartItem: {
            display: 'flex',
            flexDirection: 'row',
        },
        itemImg: {
            width: '100%',
            height: '150px',
            backgroundSize: 'contain',
        },
        itemMiddle: {
            display: 'flex',
            flexDirection: 'column',
        },
    })
);

export const Cart = () => {
    const cartData = useSelector(selectCart);
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={9}>
                <Paper elevation={3}>
                    <Card>
                        <CardHeader title="Cart" />

                        {cartData.map((item) => (
                            <Fragment key={item.id}>
                                <Grid
                                    container
                                    spacing={1}
                                    style={{ padding: '16px' }}
                                >
                                    <Grid item xs={3}>
                                        <CardMedia
                                            className={classes.itemImg}
                                            image={item.image}
                                            title={item.title}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                        className={classes.itemMiddle}
                                    >
                                        <CardContent>{item.title}</CardContent>
                                        <div style={{ marginTop: 'auto' }}>
                                            <Button
                                                startIcon={
                                                    <DeleteForeverIcon />
                                                }
                                            >
                                                Remove
                                            </Button>
                                            <Button
                                                startIcon={<FavoriteIcon />}
                                            >
                                                Add To Wishlist
                                            </Button>
                                        </div>
                                    </Grid>
                                    <Grid item xs={3}>
                                        ACTIONS
                                    </Grid>
                                </Grid>
                                <Divider />
                            </Fragment>
                        ))}
                    </Card>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Paper>
                    <Card>
                        <CardContent>TOTAL</CardContent>
                    </Card>
                </Paper>
            </Grid>
        </Grid>
    );
};
