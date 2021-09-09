import { FC } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import { addTotalPrice } from 'features/cart/cartSlice';

import { IProduct } from 'pages/ShopPage/products';

import { Button, CardContent, Divider, Typography } from '@material-ui/core';

interface CartTotalProps {
    cartData: IProduct[];
}

export const CartTotal: FC<CartTotalProps> = ({ cartData }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const priceTotal = cartData.reduce(
        (prev, current) => +(prev + current.price * current.count).toFixed(2),
        0
    );

    const handleCheckout = () => {
        dispatch(addTotalPrice(priceTotal));
        history.push('/checkout');
    };

    return (
        <CardContent>
            <p>
                Amount: <span style={{ float: 'right' }}>${priceTotal}</span>
            </p>
            <p>
                Shipping: <span style={{ float: 'right' }}>Free</span>
            </p>
            <Divider />
            <Typography variant="h6" style={{ marginTop: '16px' }}>
                Total after tax:{' '}
                <span style={{ float: 'right' }}>${priceTotal}</span>
            </Typography>
            <Button
                color="primary"
                variant="contained"
                style={{ width: '100%', marginTop: '16px' }}
                onClick={handleCheckout}
            >
                Go To Checkout
            </Button>
        </CardContent>
    );
};
