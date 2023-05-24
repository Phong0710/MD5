import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct =createAsyncThunk(
    'products/getProduct',
    async ()=>{
        const res = await axios('http://localhost:3001/products');
        return res.data;
    }
)