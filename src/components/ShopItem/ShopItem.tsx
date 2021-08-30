import { FC, useState } from 'react';
import { IProduct } from 'pages/shop/products';
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Collapse,
    IconButton,
    Typography,
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        media: {
            height: 250,
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto !important',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        header: {
            minHeight: '116px',
        },
    })
);

export const ShopItem: FC<IProduct> = ({
    title,
    price,
    description,
    category,
    image,
}) => {
    const classes = useStyles();

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card>
            <CardHeader
                className={classes.header}
                avatar={<Avatar aria-label="recipe">{title[0]}</Avatar>}
                title={
                    <Typography variant="body2" aria-label="recipe">
                        {title}
                    </Typography>
                }
                subheader={category}
            />
            <CardMedia
                image={image}
                title={title}
                className={classes.media}
                style={{ backgroundSize: 'contain' }}
            />

            <CardActions>
                <Button variant="outlined">Add To Cart</Button>
                <IconButton
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    className={`${classes.expand} ${
                        expanded && classes.expandOpen
                    }`}
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>{description}</CardContent>
            </Collapse>
        </Card>
    );
};
