import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export const newRoutineViewSlice = createSlice({
    name:'newRoutineView',
    initialState: {
        view: "routineName"
    },
    reducers:{
        changeView: (state,  action: PayloadAction<string>) => {
            state.view = action.payload
        },

    }
})

export const {changeView} = newRoutineViewSlice.actions
export default newRoutineViewSlice.reducer