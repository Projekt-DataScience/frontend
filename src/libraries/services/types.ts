export interface RegisterUser {
    first_name: string,
    last_name: string,
    email: string,
    password_hash: string,
    supervisor_id: number,
    layer_id: number,
    company_id: number,
    group_id: number,
    role_id: number
}

export interface CachedUser {
    result: number,
    token: string
}

export interface LoginUser {
    email: string,
    password_hash: string,
}

export interface ValidatedUser {
    result: number,
    payload: ValidatedPayload
}

export interface ValidatedPayload {
    user_id: number,
    expires: number,
    company_id: number,
    role: string
}