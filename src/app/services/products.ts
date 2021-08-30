import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IProduct } from 'pages/shop/products';

export const productApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com',
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], string>({
            query: () => 'products',
        }),
    }),
});

export const { useGetProductsQuery } = productApi;
