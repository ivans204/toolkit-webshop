import { CartItem } from 'components/CartItem';

import { useSelector } from 'react-redux';
import { selectCart } from 'features/cart/cartSlice';

import {
    Button,
    Card,
    CardHeader,
    CardContent,
    Divider,
    Paper,
    Grid,
    Typography,
} from '@material-ui/core';

export const Cart = () => {
    const cartData = useSelector(selectCart);

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
                            <CartItem key={item.id} item={item} />
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
