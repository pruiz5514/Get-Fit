const defaultBaseUrl = import.meta.env.VITE_BACK_HOST ?? ''

export class HttpClient{
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

    async post<T,B>(url:string, body: B): Promise<T>{
        const headers = await this.getHeader();
        const response = await fetch(`${this.baseUrl}/${url}`,{
            headers: headers,
            method: 'POST',
            body: JSON.stringify(body)
        })
        return this.handleResponse(response)
    }

    

    async getHeader(){
        const headers: HeadersInit = {
            "Content-Type" : 'application/json'
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