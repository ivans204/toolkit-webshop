import { FC } from 'react';
import { IProduct } from 'pages/ShopPage/products';

import { addItem, removeItem, removeFromCart } from 'features/cart/cartSlice';
import { useDispatch } from 'react-redux';

import {
    Button,
    ButtonGroup,
    CardContent,
    CardMedia,
    Divider,
    Grid,
    Typography,
} from '@material-ui/core';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { useStyles } from './style';

interface CartItemProps {
    item: IProduct;
}

export const CartItem: FC<CartItemProps> = ({ item }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    return (
        <>
            <Grid container spacing={1} className={classes.itemContainer}>
                <Grid item xs={3}>
                    <CardMedia
                        className={classes.itemImg}
                        image={item.image}
                        title={item.title}
                    />
                </Grid>

                <Grid item xs={6} className={classes.gridItemColumn}>
                    <CardContent>{item.title}</CardContent>
                    <div style={{ marginTop: 'auto' }}>
                        <Button
                            startIcon={<DeleteForeverIcon />}
                            onClick={() => dispatch(removeFromCart(item.id))}
                        >
                            Remove
                        </Button>
                        <Button startIcon={<FavoriteIcon />} disabled>
                            Add To Wishlist
                        </Button>
                    </div>
                </Grid>

                <Grid item xs={3} className={classes.gridItemColumn}>
                    <ButtonGroup className={classes.actionBtns}>
                        <Button
                            onClick={() => dispatch(removeItem(item.id))}
                            disabled={item.count === 1}
                        >
                            -
                        </Button>
                        <Button>{item.count}</Button>
                        <Button onClick={() => dispatch(addItem(item.id))}>
                            +
                        </Button>
                    </ButtonGroup>
                    <Typography variant="h6" className={classes.itemOnBotRight}>
                        ${(item.price * item.count).toFixed(2)}
                    </Typography>
                </Grid>
            </Grid>
            <Divider />
        </>
    );
};
