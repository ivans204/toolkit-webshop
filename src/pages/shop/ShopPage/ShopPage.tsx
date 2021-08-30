import { ShopItem } from 'components/ShopItem';

import { IProduct } from '../products';

import { useGetProductsQuery } from 'app/services/products';

import { Container, Grid } from '@material-ui/core';

export const ShopPage = () => {
    const { data, error, isLoading } = useGetProductsQuery(
        'https://fakestoreapi.com/products'
    );

    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <h1>Error...</h1>;

    return (
        <Container style={{ marginTop: '50px' }}>
            <Grid
                container
                direction="row"
                spacing={3}
                alignContent="space-between"
                justifyContent="center"
            >
                {data?.map(
                    ({
                        id,
                        title,
                        price,
                        description,
                        category,
                        image,
                    }: IProduct) => (
                        <Grid item key={id} xs={4}>
                            <ShopItem
                                id={id}
                                title={title}
                                price={price}
                                description={description}
                                category={category}
                                image={image}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </Container>
    );
};
