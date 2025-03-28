import { IRoutinesResponse } from "../../core/application/dto/routines/get-routines.dto";
import { IRoutinePost } from "../../core/application/dto/routines/post-routine.dto";
import { IRoutinePostResponse } from "../../core/application/dto/routines/post-routine-response.dto";
import { errorAlert } from "../utils/alerts";
import { HttpClient } from "../utils/client-http";
import { IExerciseRoutinePost, IExerciseRoutinePostResponse } from "../../core/application/dto/routines/post-exercise-routine.dto";
import { IRoutineByID } from "../../core/application/dto/routines/get-routineById.dto";

export class RoutinesService{
    private httpClient: HttpClient;
    
    constructor(baseUrl?: string,token?:string){
        this.httpClient = new HttpClient(baseUrl, token);
    }

    async getRoutines(url:string): Promise<IRoutinesResponse[]>{
        try{
            const routines = await this.httpClient.get<IRoutinesResponse[]>(url);
            return routines
        } catch(error){
            throw error
        }
    }

    async getRoutineById(url:string,id:string):Promise<IRoutineByID>{
        try{
            const routineById = await this.httpClient.get<IRoutineByID>(`${url}/${id}`)
            return routineById
        } catch(error){
            throw error
        }
    }

    async postRoutine(url:string, body:IRoutinePost):Promise<IRoutinePostResponse>{
        try{
            const newRoutine = await this.httpClient.post<IRoutinePostResponse, IRoutinePost>(url, body);
            return newRoutine
        } catch(error){
            errorAlert('Ya existe una rutina con ese nombre')
            throw error
        }
    }

    async postExerciseRoutine(url:string, body:IExerciseRoutinePost):Promise<IExerciseRoutinePostResponse>{
        try{
            const newRoutineWithExercises = await this.httpClient.post<IExerciseRoutinePostResponse, IExerciseRoutinePost>(url, body);
            return newRoutineWithExercises
        }catch(error:any){
            errorAlert("Ejercicios ya se encuentran registrados en la rutina")
            throw error
        }
    }

    async deleteExercise(url:string, id:number){
        try{
            await this.httpClient.delete(`${url}/${id}`)
        }catch(error){
            throw error
        }
    }
}