import {createAsyncThunk} from "@reduxjs/toolkit";
import customAPI from "./customAPI";

export const getProduct = createAsyncThunk(
    'products/getProducts',
    async () => {
        const res = await customAPI.get('products');
        return res.data;
    }
)
export const createProduct = createAsyncThunk(
    'products/createProducts',
    async (product) => {
        await customAPI.post('products', product);
        return product;
    }
)
export const editProduct = createAsyncThunk(
    'products/editProducts',
    async (arg, thunkAPI) => {
        await customAPI.put(`products/${arg.id}`, arg.product);
        return arg.product;
    }
)
export const deleteProduct = createAsyncThunk(
    'products/deleteProducts',
    async (id) => {
        await customAPI.delete(`products/${id}`);
        return id
    }
)