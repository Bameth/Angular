import { Observable } from "rxjs";
import { ProduitCatalogue, ProduitDetail } from "../model/catalogue.model";

export interface ICatalogueService {
    getProductsCatalogues(): Observable<ProduitCatalogue[]>;
    getProductsDetailCatalogue(produitId: number): Observable<ProduitDetail>;
}