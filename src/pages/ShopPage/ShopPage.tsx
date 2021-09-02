import { FC } from 'react';
import './style.css';

import { ShopItem } from 'components/ShopItem';
import { Spinner } from 'components/Spinner';

import { IProduct } from './products';

import { useGetCategoryProductsQuery } from 'app/services/products';

import Masonry from 'react-masonry-css';

interface ShopPageProps {
    categoryName: string;
}

export const ShopPage: FC<ShopPageProps> = ({ categoryName }) => {
    const {
        data: products,
        error,
        isLoading,
    } = useGetCategoryProductsQuery(categoryName);

    const breakpoints = {
        default: 3,
        '600': 1,
        '960': 2,
    };

    if (isLoading) return <Spinner />;
    if (error) return <h1>Error...</h1>;

    return (
        <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
            {products?.map((product: IProduct) => (
                <div key={product.id}>
                    <ShopItem product={product} />
                </div>
            ))}
        </Masonry>
    );
};
