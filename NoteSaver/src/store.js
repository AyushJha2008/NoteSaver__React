import {configureStore} from '@reduxjs/toolkit'
import noteReducer from '../src/redux/noteSlice'

export const store = configureStore({
    reducer: {
        note: noteReducer
    },
})