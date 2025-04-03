export interface User {
    id: number;
    name: string;
    login: string;
    password: string;
    role: Role;
}

export type Role = 'client' | 'admin';

export enum RoleEnum {
    admin = 'admin',
    client = 'client'
}

export interface LoginResponse {
    message: string;
    success: boolean;
    data: User | null;
}