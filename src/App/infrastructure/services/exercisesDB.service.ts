import { IExerciseDBResponse } from "../../core/application/dto/excersiceDB/exerciseDB-response.dto";
import { ExerciseClient } from "../utils/exercise-http";

export class ExerciseDBService{
    private httpExercise: ExerciseClient;

    constructor(baseUrl?: string){
        this.httpExercise = new ExerciseClient(baseUrl);
    }

    async getExerciseByMuscle(url:string){
        try{
            const exercises = await this.httpExercise.get<IExerciseDBResponse[]>(`bodyPart/${url}`);
            return exercises
        } catch(error){
            console.log(error);
            throw error
        }
    }
}