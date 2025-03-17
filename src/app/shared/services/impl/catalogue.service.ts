import { inject, Injectable } from '@angular/core';
import { ProduitCatalogue, ProduitDetail } from '../../model/catalogue.model';
import { ICatalogueService } from '../ICatalogueService';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService implements ICatalogueService {
  getProductsDetailCatalogue(produitId: number): Observable<ProduitDetail> {
    return this.httpClient.get<ProduitDetail>(`http://localhost:9090/api/produits/detail/${produitId}`);
  }
  
  // constructor(private httpClient:HttpClient) { }
  private httpClient: HttpClient = inject(HttpClient);
  getProductsCatalogues(): Observable<ProduitCatalogue[]> {
    return this.httpClient.get<ProduitCatalogue[]>('http://localhost:9090/api/produits');
  }
}
