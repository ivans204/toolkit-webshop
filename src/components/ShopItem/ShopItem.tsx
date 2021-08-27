import { FC } from 'react';
import { IProduct } from 'pages/shop/products';

export const ShopItem: FC<IProduct> = ({
    id,
    title,
    price,
    description,
    category,
    image,
}) => {
    return (
        <div>
            {title}
            {price}
            {description}
            {category}
            {image}
        </div>
    );
};
