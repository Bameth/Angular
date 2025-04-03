import { Observable } from "rxjs";
import { LoginResponse, Role, User } from "../model/user.model";

export interface IAuthService {
    isAuthenticated(): boolean;
    login(username: string, password: string): Observable<LoginResponse>;
    logout(): void;
    isClient() : boolean;
    isAdmin() : boolean;
    hasRole(role: Role) : boolean;
}