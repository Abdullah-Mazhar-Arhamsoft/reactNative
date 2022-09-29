import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productAdder from '../features/counter/productslice'


export const store = configureStore({
    reducer: {
        updateuser: counterReducer,
        addproduct: productAdder,

    },
})