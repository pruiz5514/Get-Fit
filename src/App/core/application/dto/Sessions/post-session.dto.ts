export interface ISessionPost{
    id_exercise: string
}

export interface ISessionPostResponse {
    message: string;
    session: ISession;
}

export interface ISession {
    id_user:     number;
    id_exercise: number;
    date:        Date;
}
