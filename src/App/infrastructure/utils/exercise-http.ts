const defaultBaseUrl = import.meta.env.VITE_BACK_EXERCISE ?? ''

export class ExerciseClient{
    private baseUrl: string;


    constructor(baseUrl?: string){
        this.baseUrl = baseUrl || defaultBaseUrl
    }

    async get<T>(url:string): Promise<T>{
        const headers = await this.getHeader();
        const response = await fetch(`${this.baseUrl}/${url}`, {
            headers: headers,
            method: 'GET'
        })
        return this.handleResponse(response)
    }
    
    async getHeader(){
        const headers: HeadersInit = {
            'x-rapidapi-key': import.meta.env.VITE_BACK_KEY,
            'x-rapidapi-host': import.meta.env.VITE_BACK_EXERCISE_HOST
        }

        return headers
    }

    private async handleResponse(response: Response) {
        if (!response.ok) {
          const errorData = await response.json();
          throw errorData;
        }
    
        return await response.json();
      }
}