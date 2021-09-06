import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from 'features/cart/cartSlice';

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
    TextField,
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

            '& button span, & input': {
                width: '2rem',
            },
            '& input': {
                textAlign: 'center',
            },
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
                                            <Button>-</Button>
                                            <TextField
                                                variant="outlined"
                                                onChange={() =>
                                                    console.log(123)
                                                }
                                                defaultValue="1"
                                            />
                                            <Button>+</Button>
                                        </ButtonGroup>
                                        <Typography
                                            variant="h6"
                                            className={classes.itemOnBotRight}
                                        >
                                            ${item.price}
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
                        <CardContent>TOTAL</CardContent>
                    </Card>
                </Paper>
            </Grid>
        </Grid>
    );
};
