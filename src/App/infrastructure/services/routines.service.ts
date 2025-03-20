import { IRoutinesResponse } from "../../core/application/dto/routines/get-routines.dto";
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
}