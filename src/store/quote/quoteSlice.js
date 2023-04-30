import { createSlice } from "@reduxjs/toolkit";

export const quoteSlice = createSlice({
    name: "quote",
    initialState: {
        quotes: [],
    },
    reducers: {
        addQuote: (state, action) => {
            state.quotes.push(action.payload);
        },
        removeQuote: (state, action) => {
            state.quotes = state.quotes.filter((quote) => quote.id !== action.payload);
        },
    },
});

export const { addQuote, removeQuote } = quoteSlice.actions;

export default quoteSlice.reducer;
