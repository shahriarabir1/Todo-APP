import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reducer'

const Store=configureStore({
    reducer:counterSlice.reducer
});

export default Store;