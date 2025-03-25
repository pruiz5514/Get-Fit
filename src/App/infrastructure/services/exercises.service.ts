import { IRoutinesResponse } from "../../core/application/dto/routines/get-routines.dto";
import { IRoutinePost } from "../../core/application/dto/routines/post-routine.dto";
import { IRoutinePostResponse } from "../../core/application/dto/routines/post-routine-response.dto";
import { errorAlert } from "../utils/alerts";
import { HttpClient } from "../utils/client-http";

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

    async postRoutine(url:string, body:IRoutinePost):Promise<IRoutinePostResponse>{
        try{
            const newRoutine = await this.httpClient.post<IRoutinePostResponse, IRoutinePost>(url, body);
            return newRoutine
        } catch(error){
            errorAlert('Ya existe una rutina con ese nombre')
            throw error
        }
    }
}