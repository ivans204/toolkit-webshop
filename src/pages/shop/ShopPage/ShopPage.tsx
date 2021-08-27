import { ShopItem } from 'components/ShopItem';

import { IProduct, products } from '../products';

export const ShopPage = () => {
    return (
        <>
            {products.map(
                ({
                    id,
                    title,
                    price,
                    description,
                    category,
                    image,
                }: IProduct) => (
                    <ShopItem
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                    />
                )
            )}
        </>
    );
};
