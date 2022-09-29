import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    product: [],
}

export const productslice = createSlice({
    name: 'addproduct',
    initialState,
    reducers: {



        AddLatestProduct: (state, action) => {
            state.product = action.payload;
            //console.log('State: ', state);
            
        },
    },
})

export const {AddLatestProduct} = productslice.actions

export default productslice.reducer