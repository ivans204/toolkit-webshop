import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IProduct } from 'pages/ShopPage/products';

export const productApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com',
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], string>({
            query: () => 'products',
        }),
        getCategoryProducts: builder.query({
            query: (categoryName) => `products/category/${categoryName}`,
        }),
    }),
});

export const { useGetProductsQuery, useGetCategoryProductsQuery } = productApi;
