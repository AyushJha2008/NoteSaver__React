import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    notes:localStorage.getItem('note')? JSON.parse(localStorage.getItem('note')):[]
}

export const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers:{
        addToNotes: (state, action) =>{
            const newNote = action.payload;
            const exist = state.notes.find(note => note.title === newNote.title && note.content === newNote.content)
            if(exist)
                {const toastId = toast.loading("Note already exist")
                    setTimeout(()=>toast.error("duplicate note", {id: toastId}), 500)
                }
            else{
            state.notes.push(newNote);
            localStorage.setItem("notes",
                JSON.stringify(state.notes));
            toast.success("created successfuly");}
        },
        updateToNotes: (state, action) =>{
            const note = action.payload;
            const index = state.notes.findIndex((item) => item._id === note._id);

            if(index>=0){
                // const toastId = toast.loading("updating...")
                state.notes[index] = note
                localStorage.setItem("notes", JSON.stringify(state.notes));
                setTimeout(() =>toast.success("note updated"), 2000);
            }
        },
        resetNotes: (state, actions) =>{
            state.notes = []
            localStorage.removeItem("notes")
        },
        removeFromNotes: (state, action) =>{
            const noteId = action.payload
        },
    },
})

export const { addToNotes, updateToNotes, resetNotes, removeFromNotes} = noteSlice.actions

export default noteSlice.reducer