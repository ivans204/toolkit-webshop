import { useSelector } from 'react-redux';
import { selectCart } from 'features/cart/cartSlice';

import { CartItem } from 'components/CartItem';
import { CartTotal } from 'components/CartTotal';

import { Card, CardHeader, Paper, Grid } from '@material-ui/core';

export const Cart = () => {
    const cartData = useSelector(selectCart);

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
                        <CartTotal cartData={cartData} />
                    </Card>
                </Paper>
            </Grid>
        </Grid>
    );
};
