import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('commerce/fetchProducts', async () => {
    const response = await fetch('http://localhost:3000/Products');
    const data = await response.json();
    return data;
});

export const fetchCategories = createAsyncThunk('commerce/fetchCategories', async () => {
    const response = await fetch('http://localhost:3000/Categories');
    const data = await response.json();
    return data;
});



export const addToWishlistAsync = createAsyncThunk('commerce/addToWishlist', async ({ wishlistData, id }) => {
    try {
        const response = await fetch(`http://localhost:3000/Wishlists/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(wishlistData),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
});

export const getOrdersAsync = createAsyncThunk('orders/getOrders', async (userId) => {
    try {
        const response = await fetch(`http://localhost:3000/Orders?user_id=${userId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
});

export const addOrderAsync = createAsyncThunk('orders/addOrder', async (payload) => {
    try {
        const response = await fetch("http://localhost:3000/Orders", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        const data = await response.json();

        // Optionally, you can dispatch another action on success
        // For example: dispatch({ type: 'ORDER_ADDED_SUCCESS', payload: data });

        console.log(data);
        return data;
    } catch (error) {
        // Handle errors or dispatch an action on failure
        // For example: dispatch({ type: 'ORDER_ADDED_FAILURE', payload: error.message });
        throw new Error(error.message);
    }
});


const CommerceSlice = createSlice({
    name: "commerce",
    initialState: {
        products: [],
        categories: [],
        filteredProducts: [],
        cart: [],
        selectedCategory: "",
        searchText: "",
        orders: [],
        wishlist: [],
    },

    reducers: {
        search: (state, action) => {
            const searchQuery = action.payload.toString().toLowerCase().trim();
            if (searchQuery === "") {
                state.filteredProducts = state.products;
            } else {
                state.filteredProducts = state.products.filter((product) =>
                    product.title.toLowerCase().includes(searchQuery)
                );
            }
        },

        addToCart: (state, action) => {
            const product = state.cart.find(
                (item) => item.product.id === action.payload.id
            );
            if (product) {
                state.cart = state.cart.map((i) =>
                    i.product.id === action.payload.id
                        ? { product: i.product, quantity: i.quantity + 1 }
                        : i
                );
            } else {
                state.cart = [...state.cart, { product: action.payload, quantity: 1 }];
            }
        },

        removeToCart: (state, action) => {
            state.cart = state.cart.filter((i) => i.product.id !== action.payload);
        },
        removeAllCart: (state) => {
            state.cart = [];
        },
        filterByCategory: (state, action) => {
            state.filteredProducts = state.products.filter(
                (i) => i.categoryid === action.payload
            );
        },
        allProducts: (state) => {
            state.filteredProducts = state.products;
        },
        selectCategory:(state, action)=>{
            state.selectedCategory= action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.filteredProducts = action.payload;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
            })
            .addCase(addToWishlistAsync.fulfilled, (state, action) => {
                console.log(action.payload);
            })
            .addCase(getOrdersAsync.fulfilled, (state, action) => {
                state.orders = action.payload;
            });
            builder.addCase(addOrderAsync.fulfilled, (state, action) => {
                console.log("Order added successfully!");
            });
            builder.addCase(addOrderAsync.rejected, (state, action) => {
                console.error("Error adding order:", action.error.message);
            });
    },
});

export const {
    search,
    addToCart,
    removeToCart,
    filterByCategory,
    addOrder,
    allProducts,
    getCategories,
    getProducts,
    removeAllCart,
    selectCategory,
    selectedCategory,
    addToWishlist,
    getOrders,
} = CommerceSlice.actions;

export default CommerceSlice.reducer;
