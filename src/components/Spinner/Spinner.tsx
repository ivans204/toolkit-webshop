import Loader from 'react-loader-spinner';

import { makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        spinnerParent: {
            height: '100vh',

            '& div': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
            },
        },
    })
);

export const Spinner = () => {
    const classes = useStyles();
    return (
        <div className={classes.spinnerParent}>
            <Loader type="Oval" color="#007bff" height={100} width={100} />
        </div>
    );
};
