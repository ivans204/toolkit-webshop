import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from 'features/cart/cartSlice';

import {
    makeStyles,
    createStyles,
    Theme,
    Grid,
    Card,
    CardHeader,
    CardContent,
    Paper,
    Divider,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({}));

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
                                <CardContent>{item.title}</CardContent>
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
