import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        addComment: (state, action) => {
            state.push(action.payload);
        },
    }
})

export const { addComment } = commentSlice.actions
export default commentSlice.reducer;