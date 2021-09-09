import { Fragment } from 'react';

import { useSelector } from 'react-redux';
import {
    selectCart,
    addItem,
    removeItem,
    removeFromCart,
} from 'features/cart/cartSlice';
import { useDispatch } from 'react-redux';

import {
    makeStyles,
    createStyles,
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardContent,
    CardMedia,
    Divider,
    Paper,
    Grid,
    Theme,
    Typography,
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
        gridItemColumn: {
            display: 'flex',
            flexDirection: 'column',
        },
        itemContainer: {
            padding: '32px 16px',
        },
        itemOnBotRight: {
            marginTop: 'auto',
            textAlign: 'right',
        },
        actionBtns: {
            display: 'flex',
            justifyContent: 'center',

            '& button, & input': {
                maxWidth: '2rem',
            },
            '& input': {
                textAlign: 'center',
            },
        },
    })
);

export const Cart = () => {
    const dispatch = useDispatch();

    const cartData = useSelector(selectCart);
    const classes = useStyles();

    const priceTotal = cartData.reduce(
        (prev, current) => +(prev + current.price * current.count).toFixed(2),
        0
    );

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
                                    className={classes.itemContainer}
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
                                        className={classes.gridItemColumn}
                                    >
                                        <CardContent>{item.title}</CardContent>
                                        <div style={{ marginTop: 'auto' }}>
                                            <Button
                                                startIcon={
                                                    <DeleteForeverIcon />
                                                }
                                                onClick={() =>
                                                    dispatch(
                                                        removeFromCart(item.id)
                                                    )
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

                                    <Grid
                                        item
                                        xs={3}
                                        className={classes.gridItemColumn}
                                    >
                                        <ButtonGroup
                                            className={classes.actionBtns}
                                        >
                                            <Button
                                                onClick={() =>
                                                    dispatch(
                                                        removeItem(item.id)
                                                    )
                                                }
                                                disabled={item.count === 1}
                                            >
                                                -
                                            </Button>
                                            <Button>{item.count}</Button>
                                            <Button
                                                onClick={() =>
                                                    dispatch(addItem(item.id))
                                                }
                                            >
                                                +
                                            </Button>
                                        </ButtonGroup>
                                        <Typography
                                            variant="h6"
                                            className={classes.itemOnBotRight}
                                        >
                                            $
                                            {(item.price * item.count).toFixed(
                                                2
                                            )}
                                        </Typography>
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
                        <CardHeader title="Total" />
                        <CardContent>
                            <p>
                                Amount:{' '}
                                <span style={{ float: 'right' }}>
                                    ${priceTotal}
                                </span>
                            </p>
                            <p>
                                Shipping:{' '}
                                <span style={{ float: 'right' }}>Free</span>
                            </p>
                            <Divider />
                            <Typography
                                variant="h6"
                                style={{ marginTop: '16px' }}
                            >
                                Total after tax:{' '}
                                <span style={{ float: 'right' }}>
                                    ${priceTotal}
                                </span>
                            </Typography>
                            <Button
                                color="primary"
                                variant="contained"
                                style={{ width: '100%', marginTop: '16px' }}
                            >
                                Go To Checkout
                            </Button>
                        </CardContent>
                    </Card>
                </Paper>
            </Grid>
        </Grid>
    );
};
