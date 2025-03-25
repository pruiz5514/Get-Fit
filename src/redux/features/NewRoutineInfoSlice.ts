import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Routine } from "../../App/core/application/dto/routines/post-routine-response.dto";

interface INewRoutineState {
    newRoutineInfo: null | Routine; 
}

const initialState: INewRoutineState = {
    newRoutineInfo: null,
};

export const newRoutineInfoSlice = createSlice({
    name:'newRoutineInfo',
    initialState,
    reducers:{
        setNewRoutineInfo: (state,  action: PayloadAction<Routine|null>) => {
            state.newRoutineInfo = action.payload
        },

    }
})

export const {setNewRoutineInfo} = newRoutineInfoSlice.actions
export default newRoutineInfoSlice.reducer