import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IExerciseDBResponse } from "../../App/core/application/dto/excersiceDB/exerciseDB-response.dto";

export const newRoutineSlice = createSlice({
    name:'newRoutine',
    initialState: {
        routines: [] as IExerciseDBResponse[],
    },
    reducers:{
        addExercise: (state, action: PayloadAction<IExerciseDBResponse>) => {
            state.routines.push(action.payload)
        }
    }
})

export const {addExercise} = newRoutineSlice.actions
export default newRoutineSlice.reducer