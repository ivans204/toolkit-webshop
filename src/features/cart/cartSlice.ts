import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import { IProduct } from 'pages/ShopPage/products';

export interface CartState {
    items: IProduct[];
    totalPrice: number;
}

const initialState: CartState = {
    items: [
        {
            id: 15,
            title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
            price: 56.99,
            description:
                'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates',
            category: "women's clothing",
            image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
            count: 1,
        },
        {
            id: 16,
            title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
            price: 29.95,
            description:
                '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',
            category: "women's clothing",
            image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
            count: 1,
        },
        {
            id: 17,
            title: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
            price: 39.99,
            description:
                "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
            category: "women's clothing",
            image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
            count: 1,
        },
    ],
    totalPrice: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            if (!state.items.some((item) => item.id === action.payload.id)) {
                state.items.push(action.payload);
            } else {
                state.items.find((item) =>
                    item.id === action.payload.id ? item.count++ : null
                );
            }
        },
        addItem: (state, action: PayloadAction<number>) => {
            state.items.find((item) =>
                item.id === action.payload ? item.count++ : null
            );
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.items.find((item) =>
                item.id === action.payload ? item.count-- : null
            );
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },
        addTotalPrice: (state, action: PayloadAction<number>) => {
            state.totalPrice = action.payload;
        },
    },
});

export const { addToCart, addItem, removeItem, removeFromCart, addTotalPrice } =
    cartSlice.actions;
export const selectCart = (state: RootState) => state.cart.items;
export default cartSlice.reducer;
