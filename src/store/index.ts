import { configureStore } from '@reduxjs/toolkit'
import blogSlice from './reducers/blogs.reducer'

const store = configureStore({
    reducer:{
        blogs:blogSlice,
    }
})

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch

export default store
