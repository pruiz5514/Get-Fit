import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Routine } from "../../App/core/application/dto/routines/post-routine-response.dto";

interface ICurrentSessionState {
    currentSession: null | Routine; 
}

const initialState: ICurrentSessionState = {
    currentSession: null,
};

export const currentSessionSlice = createSlice({
    name:'currentSession',
    initialState,
    reducers:{
        setCurrentSession: (state,  action: PayloadAction<Routine|null>) => {
            state.currentSession = action.payload
        },

    }
})

export const {setCurrentSession} = currentSessionSlice.actions
export default currentSessionSlice.reducer