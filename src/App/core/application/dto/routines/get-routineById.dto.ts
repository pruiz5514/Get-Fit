export interface IRoutineByID {
    id:                number;
    name:              string;
    id_user:           number;
    routine_exercises: IRoutineExercise[];
}

export interface IRoutineExercise {
    id:          number;
    exercise_id: string;
    id_routine:  number;
}
