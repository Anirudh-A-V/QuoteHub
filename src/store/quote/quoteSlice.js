import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    quotes: [],
  },
  reducers: {
    addQuote: (state, action) => {
      state.quotes.push(action.payload);
      const quoteIds = state.quotes.map((quote) => quote.id);
      localStorage.setItem("quotes", JSON.stringify(quoteIds));
    },
    removeQuote: (state, action) => {
      state.quotes = state.quotes.filter((quote) => quote.id !== action.payload);
      const quoteIds = state.quotes.map((quote) => quote.id);
      localStorage.setItem("quotes", JSON.stringify(quoteIds));
    },
    setQuotes: (state, action) => {
      state.quotes = action.payload;
    },
  },
});

export const { addQuote, removeQuote, setQuotes } = quoteSlice.actions;

// Async action to fetch quotes
export const fetchQuotes = () => {
  return async (dispatch) => {
    try {
      const ids = JSON.parse(localStorage.getItem("quotes").replace(/\\/g, ""));
      if (ids) {
        const quoteList = [];

        // Fetch quotes using Promise.all
        await Promise.all(
          ids.map((element) =>
            axios
              .get("https://api.quotable.io/quotes/" + element)
              .then((res) => {
                quoteList.push({
                  id: res.data._id,
                  quote: res.data.content,
                  author: res.data.author,
                  saved: true,
                });
              })
              .catch((err) => console.log(err))
          )
        );

        dispatch(setQuotes(quoteList));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export default quoteSlice.reducer;
