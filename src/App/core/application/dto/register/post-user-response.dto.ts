export interface IPostUserResponse {
    message: string;
    user:    User;
}

export interface User {
    id:       number;
    email:    string;
    username: string;
}
