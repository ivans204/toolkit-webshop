import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
