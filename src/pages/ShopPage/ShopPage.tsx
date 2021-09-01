import './style.css';
import { ShopItem } from 'components/ShopItem';

import { IProduct } from './products';

import { useGetProductsQuery } from 'app/services/products';

import Masonry from 'react-masonry-css';

export const ShopPage = () => {
    const { data, error, isLoading } = useGetProductsQuery(
        'https://fakestoreapi.com/products'
    );

    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <h1>Error...</h1>;

    return (
        <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
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
                    <div key={id}>
                        <ShopItem
                            id={id}
                            title={title}
                            price={price}
                            description={description}
                            category={category}
                            image={image}
                        />
                    </div>
                )
            )}
        </Masonry>
    );
};
