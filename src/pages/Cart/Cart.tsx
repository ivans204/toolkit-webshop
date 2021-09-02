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
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={9}>
                <Paper elevation={3}>
                    <Card>
                        <CardHeader title="Cart" />

                        <CardContent>ITEM</CardContent>
                        <Divider />

                        <CardContent>ITEM</CardContent>
                        <Divider />

                        <CardContent>ITEM</CardContent>
                        <Divider />
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
