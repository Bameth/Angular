import { Observable } from "rxjs";
import { RestResponseModel } from "../model/rest-response.model";

export interface IGeneriqueService<T> {
    create(item: T): Observable<RestResponseModel<T>>;
    update(item: T, id: number): Observable<RestResponseModel<T>>;
    delete(id: number): Observable<void>;
    getOne(id: number): Observable<RestResponseModel<T>>;
    getAll(): Observable<RestResponseModel<T[]>>;
    getAllWithPagination(page: number, size: number): Observable<RestResponseModel<T[]>>;
}