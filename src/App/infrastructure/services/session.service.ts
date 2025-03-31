import { IRoutinesResponse } from "../../core/application/dto/routines/get-routines.dto";
import { IRoutinePost } from "../../core/application/dto/routines/post-routine.dto";
import { IRoutinePostResponse } from "../../core/application/dto/routines/post-routine-response.dto";
import { errorAlert } from "../utils/alerts";
import { HttpClient } from "../utils/client-http";
import { ISessionPost, ISessionPostResponse } from "../../core/application/dto/Sessions/post-session.dto";

export class SessionsService{
    private httpClient: HttpClient;
    
    constructor(baseUrl?: string,token?:string){
        this.httpClient = new HttpClient(baseUrl, token);
    }

    // async getRoutines(url:string): Promise<IRoutinesResponse[]>{
    //     try{
    //         const routines = await this.httpClient.get<IRoutinesResponse[]>(url);
    //         return routines
    //     } catch(error){
    //         throw error
    //     }
    // }

    async postSession(url:string, body:ISessionPost):Promise<ISessionPostResponse>{
        try{
            const newRoutine = await this.httpClient.post<ISessionPostResponse, ISessionPost>(url, body);
            return newRoutine
        } catch(error){
            errorAlert('No se pudo crear la sesión')
            throw error
        }
    }
}