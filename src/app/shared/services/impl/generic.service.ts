import { inject, Injectable } from '@angular/core';
import { IGeneriqueService } from '../IGeneriqueService';
import { Observable } from 'rxjs';
import { RestResponseModel } from '../../model/rest-response.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GenericService<T> implements IGeneriqueService<T> {
  protected apiUrl!: string;
  protected endPoint!: string
  protected httpClient: HttpClient = inject(HttpClient);
  constructor(protected http: HttpClient) {}
  getAllWithPagination(page: number = environment.page, size: number = environment.size): Observable<RestResponseModel<T[]>> {
    return this.http.get<RestResponseModel<T[]>>(`${this.apiUrl}?page=${page}&size=${size}`);
  }
  create(item: T): Observable<RestResponseModel<T>> {
    return this.http.post<RestResponseModel<T>>(this.apiUrl, item);
  }
  update(item: T, id: number): Observable<RestResponseModel<T>> {
    return this.http.put<RestResponseModel<T>>(`${this.apiUrl}/${id}`, item);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/${this.apiUrl}/${id}`);
  }
  getOne(id: number): Observable<RestResponseModel<T>> {
    return this.http.get<RestResponseModel<T>>(`${this.apiUrl}/${id}`);
  }
  getAll(): Observable<RestResponseModel<T[]>> {
    return this.http.get<RestResponseModel<T[]>>(this.apiUrl);
  }
}
