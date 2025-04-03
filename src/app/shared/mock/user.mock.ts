import { User } from "../model/user.model";

export const MOCK_USER: User[] = [
    {
        id: 1,
        name: 'Ndiaye',
        login: 'client@example.com',
        password: 'client123',
        role: 'client'

    },

    {
        id: 2,
        name: 'Fall',
        login: 'admin@example.com',
        password: 'admin123',
        role: 'admin'
    }
]