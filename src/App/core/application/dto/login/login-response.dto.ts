export interface ILoginResponse {
    message: string;
    user:    User;
    token:   string;
}

export interface User {
    id:       number;
    email:    string;
    username: string;
}
