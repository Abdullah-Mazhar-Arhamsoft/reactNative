import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user_email: '',
}

export const counterSlice = createSlice({
    name: 'updateuser',
    initialState,
    reducers: {
        // updateUserName: (state) => {
        //     state.user_name;
        //     console.log('Dispatch');
        //     console.log(state);
        // },

        updateUserEmail: (state, action) => {
            state.user_email = action.payload;
        },
    },
})

export const {updateUserName, updateUserEmail} = counterSlice.actions

export default counterSlice.reducer