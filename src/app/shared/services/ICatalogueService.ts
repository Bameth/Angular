import { Observable } from "rxjs";
import { ProduitCatalogue, ProduitDetail } from "../model/catalogue.model";
import { RestResponseModel } from "../model/rest-response.model";

export interface ICatalogueService {
    getProductsDetailCatalogue(produitId: number): Observable<RestResponseModel<ProduitDetail>>;
}