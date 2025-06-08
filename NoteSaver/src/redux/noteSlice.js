import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: localStorage.getItem("notes")? JSON.parse(localStorage.getItem("notes")):[]
}

export const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers:{
        addToNotes: (state, actions) =>{
        },
        updateToNotes: (state, actions) =>{
        },
        resetNotes: (state, actions) =>{
        },
        removeFromNotes: (state, actions) =>{
        },
    },
})

export const { addToNotes, updateToNotes, resetNotes, removeFromNotes} = noteSlice.actions

export default noteSlice.reducer