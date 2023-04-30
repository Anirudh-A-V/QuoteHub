import { configureStore } from '@reduxjs/toolkit'
import quoteReducer from './quote/quoteSlice'

export default configureStore({
  reducer: {
    quote: quoteReducer
  }
})