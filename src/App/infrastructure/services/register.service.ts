import { IUserPostApi } from "../../core/application/dto/register/post-user.dto";
import { errorAlert, successAlert } from "../utils/alerts";
import { HttpClient } from "../utils/client-http";

export class RegisterService{
    private httpClient: HttpClient;

    constructor(baseUrl?: string){
        this.httpClient = new HttpClient(baseUrl);
    }

    async postUser(url:string, body: IUserPostApi){
        try{
            const newUser = await this.httpClient.post(url, body);
            successAlert('Usuario creado exitosamente')
            return newUser
        } catch(error){
            errorAlert((error as { message: string }).message);
            console.log(error);
            throw error
        }
    }
}