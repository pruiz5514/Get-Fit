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
        },
        removeExercise: (state, action: PayloadAction<IExerciseDBResponse>) => {
            const index = state.routines.findIndex(exercise => exercise.id === action.payload.id)
            if(index !== -1){
                state.routines.splice(index,1)
            }
        },
        resetRoutines: (state) =>{
            state.routines = []
        }   
    }
})

export const {addExercise, removeExercise, resetRoutines} = newRoutineSlice.actions
export default newRoutineSlice.reducer